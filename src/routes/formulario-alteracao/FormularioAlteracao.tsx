import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import iconretornar from '/icon-retornar-branco.png';

export default function FormularioAlteracao() {

    const { estudante, atualizarEndereco } = useAuth();
    const navigate = useNavigate();

    const cepInicial = estudante?.endereco?.cep ?? "";
    const cidadeInicial = estudante?.endereco?.cidade ?? "";
    const bairroInicial = estudante?.endereco?.bairro ?? "";
    const ruaInicial = estudante?.endereco?.rua ?? "";
    const numeroInicial = estudante?.endereco?.numero ?? "";
    const complementoInicial = estudante?.endereco?.complemento ?? "";


    const [cep, setCep] = useState(cepInicial);
    const [cidade, setCidade] = useState(cidadeInicial);
    const [bairro, setBairro] = useState(bairroInicial);
    const [rua, setRua] = useState(ruaInicial);
    const [numero, setNumero] = useState(numeroInicial);
    const [complemento, setComplemento] = useState(complementoInicial);

    const [mensagem, setMensagem] = useState("");

    if (!estudante) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-xl text-red-500">Você precisa estar logado para alterar o endereço.</h2>
            </div>
        );
    }

    const handleSalvar = async (e: React.FormEvent) => {
        e.preventDefault();

        const senha = prompt("Digite sua senha para confirmar a alteração:");

        if (!senha) {
            setMensagem("Você precisa informar sua senha.");
            return;
        }

        const resposta = await atualizarEndereco(
            estudante.email,
            senha,
            cep,
            cidade,
            bairro,
            rua,
            Number(numero),
            complemento
        );

        if (resposta === "Endereço atualizado com sucesso!") {
            alert(resposta);
            navigate("/home-aluno");
        } else {
            setMensagem(resposta || "Erro ao atualizar.");
        }
    }

   

    

    return(
        <>

        <section className="min-h-screen flex">
            <section className="bg-[url('/gif-page.gif')] bg-cover bg-left w-2/4 flex flex-col justify-center items-center">

                
            </section>
            <section className="w-2/4  mim-h-screen flex flex-col justify-center items-center">
                <a href="/" className=" w-40 h-14 bg-[#2000fc] text-white font-bold px-4 py-2.5 rounded-full hover:bg-[#005fa3] flex items-center ml-120 mt-5"><img src={iconretornar}/>⠀VOLTAR</a>
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-3xl bg-black }" onSubmit={handleSalvar} >

                    <h1 className="text-3xl text-center text-white font-bold m-6">ATUALIZAR ENDEREÇO</h1>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder=" CEP:" name="novoCep" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" 
                    placeholder=" Cidade:" name="novaCidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" 
                    placeholder=" Bairro:" name="novoBairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" 
                    placeholder=" Rua:" name="novaRua" value={rua} onChange={(e) => setRua(e.target.value)} />
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="number" 
                    placeholder=" Número:" name="novoNumero" value={numero} onChange={(e) => setNumero(Number(e.target.value))} />
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text" 
                    placeholder=" Complemento:" name="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                    
                    <span className="block m-3 text-red-500 text-center">{mensagem}</span>

                    <button className="block m-auto bg-[#f04f6f] hover:bg-[#f74065] py-2 px-14 rounded-3xl  text-white font-bold mt-5"
                    type="submit">SALVAR ALTERAÇÕES </button>
                    
                </form>
            </section>
        </section>

        </>
    )
}