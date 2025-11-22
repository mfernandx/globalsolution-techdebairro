import { useState } from "react";
import { useForm } from "react-hook-form";
import iconretornar from '/icon-retornar-branco.png';

type FormularioDoacao = {nomeDoador:string; tipoDoador:string; telefone:number; tipoEquipamento:string; marca:string; modelo:string; descricaoEstado:string};

export default function FormularioDoacao() {

    const {register,handleSubmit} = useForm <FormularioDoacao>();
    const [mensagem, setMensagem] = useState<string | null>(null);
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | null>(null);


    const onSubmit = async (dados:FormularioDoacao) => {
        console.log("Dados do form:",dados);

        try {
            const response = await fetch("http://localhost:8080/doacoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    nomeDoador: dados.nomeDoador,
                    tipoDoador: dados.tipoDoador,
                    contatoDoador: dados.telefone,

                    equipamento: {
                        tipoEquipamento: dados.tipoEquipamento,
                        marca: dados.marca,
                        modelo: dados.modelo,
                        descricaoEstado: dados.descricaoEstado
                    }
                 }),
            });

            const data = await response.json();

            if (response.ok) {
                setMensagem(data.mensagem || "Solicitação enviada com sucesso!");
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
        <section className="min-h-screen flex">

            <section className="bg-[url('/gif-page.gif')] bg-cover bg-left w-2/4 flex flex-col justify-center items-center text-white"></section>

            <section className="w-2/4 min-h-screen flex flex-col justify-center items-center">

                <a href="/doacao" className=" w-35 h-10 bg-[#2000fc] text-white font-bold px-4 py-2.5 rounded-full hover:bg-[#005fa3] flex items-center ml-130 mt-2 mb-2"><img src={iconretornar}/>⠀VOLTAR</a>
                <form onSubmit={handleSubmit(onSubmit)} className="m-auto w-96 p-6 rounded-3xl bg-black"  >
                    <h1 className="text-2xl text-center font-bold m-2 text-white">Sobre o doador:</h1>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" {...register("nomeDoador", { required: true })}
                    placeholder=" Nome do doador:" name="nomeDoador" />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" {...register("tipoDoador", { required: true })}
                    placeholder=" Tipo de doador:" name="tipoDoador" />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="tel" {...register("telefone", { required: true })}
                    placeholder=" Telefone para contato:" name="telefone"/>

                    <h1 className="text-2xl text-center font-bold m-3 text-white">Sobre a doação:</h1>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" {...register("tipoEquipamento", { required: true })}
                    placeholder=" Tipo do equipamento:" name="tipoEquipamento" />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" {...register("marca", { required: true })}
                    placeholder=" Marca:" name="marca"/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" {...register("modelo", { required: true })}
                    placeholder=" Modelo:" name="modelo"/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" {...register("descricaoEstado", { required: true })}
                    placeholder=" Descrição do estado atual:" name="descricaoEstado" />
                    
            
                    <button type="submit" className="block m-auto bg-[#f04f6f] hover:bg-[#f74065] py-2 px-14 mt-3 rounded-3xl text-white font-bold">ENVIAR</button>
                
                </form>

                <p className={`mt-4 text-center font-medium ${tipoMensagem === "sucesso" ? "text-green-600" : "text-red-500"}`}>{mensagem}</p>

            </section>

        </section>

        </>
    )
}
