import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";
import logotipo from '/logotipo-techdebairro.png'
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cabecalho from "../../components/Cabecalho";

type FormularioContato = {nomeUsuario:string;emailUsuario:string;observacao:string};

export default function Contato() {

    const {register,handleSubmit} = useForm <FormularioContato>();
    const [mensagem, setMensagem] = useState<string | null>(null);
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | null>(null);

    const onSubmit = async (dados:FormularioContato) => {
        console.log("Dados do form:",dados);

        try {
            const response = await fetch("http://localhost:8080/avaliacoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    nomeUsuario: dados.nomeUsuario,
                    emailUsuario: dados.emailUsuario,
                    mensagem: dados.observacao
                 }),
            });

            const data = await response.json();

            if (response.ok) {
                setMensagem(data.mensagem || "Mensagem enviada com sucesso!");
                setTipoMensagem("sucesso");
                
            } else {
                setMensagem(data.erro || "Erro ao enviar.Tente novamente.");
                setTipoMensagem("erro");
            }

        } catch (error) {
            console.error(error);
            setMensagem("Erro ao comunicar com o servidor.");
            setTipoMensagem("erro");
        }
    };


    return(
        <>
        <Navegador/>

        <Cabecalho/>

        <section className='flex'>
        
            <section className='block p-15'>
        
                <section className=" items-center w-[900] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify mr-35">Nossa equipe valoriza<br></br> sua opinião.Contribua<br></br> para a transformação.</h2>
                </section>
        
                <section className=" w-[700] flex justify-center mt-[25px] mr-30">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Entre em contato com nossa equipe para tirar dúvidas, propor parcerias, fornecer Feedbacks, oferecer apoio ou solicitar informações sobre as atividades. Estamos disponíveis para ouvir, orientar e construir juntos novas oportunidades. Sua mensagem pode ser o primeiro passo para uma grande transformação.</h4>
                </section>
        
            </section>   
        
                <section className='block mt-30'>
                    <img className="w-100"src={logotipo} />
                </section>
        
        </section>

        <section className="h-5 bg-[url('/background-page.png')] bg-cover mb-5"></section>

        <section className='bg-black w-[700px] mt-[50px] justify-self-center p-10 rounded-3xl mb-[50px] '>

            <h2 className='text-4xl font-bold justify-self-center text-white'> FORMULÁRIO DE CONTATO </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 justify-self-center ">
            
                <section className=''>
                <input className="mt-5 w-[600px] px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-indigo-700 outline-none border-gray-300 bg-white " id="nome" type="text"{...register("nomeUsuario", { required: true })}placeholder="Informe seu nome completo:"/>
                </section>

            
                <section className=''>
                <input className="w-[600px] px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-indigo-700 outline-none border-gray-300 bg-white" id="email"type="email"{...register("emailUsuario", { required: true })}placeholder="Informe seu e-mail:" />
                </section>

                <section className=''>
                    <input className="w-[600px] h-[100px] px-4 py-2 border rounded-3xl focus:ring-2 focus:ring-indigo-700 outline-none border-gray-300 bg-white" id="obs"type="text"{...register("observacao", { required: true })}placeholder="Digite sua observação:" />
                </section>

            
                <button type="submit" className="w-full bg-[#f04f6f] hover:bg-[#f74065] text-white py-2 px-4 rounded-3xl font-bold">ENVIAR</button>

            </form>

            <p className={`mt-4 text-center font-medium ${tipoMensagem === "sucesso" ? "text-green-600" : "text-red-500"}`}>{mensagem}</p>
    
        </section>

        <Rodape/>
        </>
    )
}