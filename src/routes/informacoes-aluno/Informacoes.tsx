import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import NavegadorAluno from "../../components/NavegadorAluno";
import Rodape from "../../components/Rodape";
import CabecalhoAluno from "../../components/CabecalhoAluno";
import logo from '/logotipo-techdebairro.png'
import iconperfil from '/icon-perfil.png'
import iconendereco from '/icon-endereco.png'
import iconconfiguracoes from '/icon-configuracoes.png'
import { useNavigate } from "react-router-dom";
import iconexcluir from '/icon-excluir.png'
import iconalterar from '/icon-alterar.png'

export default function Informacoes() {

    const { estudante,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState<string | null>(null);
    

    if (!estudante) {
        return <p>Você precisa estar logado para ver suas informações.</p>;
    }

    const handleExcluir = async () => {
        
        const senha = prompt("Digite sua senha para confirmar a exclusão da conta:");

        if (!senha) {
        setMensagem("Operação cancelada. Nenhuma senha informada.");
        return;
        }

        const resposta = await logout(estudante.email, senha);

        if (resposta === "Conta excluída com sucesso.") {
        alert(resposta);
        setTimeout(() => {navigate("/cadastro");}, 100);
    
    

        } else {
        setMensagem(resposta || "Erro ao excluir conta.");
      
        }
    };

    return(
        <>
        <NavegadorAluno/>
        <CabecalhoAluno/>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center mr-20">
                    <h2 className="text-6xl font-semibold w-[800] text-justify mr-40">Suas informações<br></br>pessoais em um <br></br>lugar só.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Bem-vindo à sua área de informações pessoais! Aqui, você pode acessar, gerenciar e atualizar seus dados de forma segura e confidencial. Se tiver alguma dúvida, entre em contato conosco.</h4>
                </section>

            </section>   

                <section className='block mt-25'>
                    <img className="w-100"src={logo} />
                </section>

        </section>



        <section className="block ">
            <section className="">
                <section className="bg-black h-20 p-4 ">
                    <h1 className="text-5xl font-bold mb-4 ml-10 flex text-white"> <img src={iconperfil} className="w-12"></img>⠀Minhas Informações:</h1>
                </section>

                <section className="p-5">
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>Nome:</strong> {estudante.nomeEstudante}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>CPF:</strong> {estudante.cpf}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>Grau de escolaridade:</strong> {estudante.grauEscolaridade}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>Telefone:</strong> {estudante.telefone}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>E-mail:</strong> {estudante.email}</p>
                </section>
            
            </section>


            <section className="">

                <section className="bg-black h-20 p-4">
                    <h1 className="text-5xl font-bold ml-10 flex text-white"> <img src={iconendereco} className="w-12"></img>⠀Meu endereço:</h1>
                </section>
                
                <section className="p-5">
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>CEP:</strong> {estudante.endereco.cep}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>Cidade:</strong> {estudante.endereco.cidade}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>Bairro:</strong> {estudante.endereco.bairro}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>Rua:</strong> {estudante.endereco.rua} , {estudante.endereco.numero}</p>
                    <p className="ml-10 mt-2 text-2xl font-light"><strong>Complemento:</strong> {estudante.endereco.complemento}</p>
                </section>
            
            </section>


            <section className="">

                <section className="bg-black h-20 p-4">
                    <h1 className="text-5xl font-bold ml-10 flex text-white"> <img src={iconconfiguracoes} className="w-12"></img>⠀Configurações:</h1>
                </section>

                <section className="h-60 ">

                    <button onClick={handleExcluir} className="bg-red-500 text-white m-15 font-bold px-4 py-2.5 rounded-full hover:bg-red-600 flex items-center"
                        type="submit"><img src={iconexcluir}></img>EXCLUIR CONTA</button>

                    <a href="/formulario-alteracao" className="  w-51 bg-[#f6617f] text-white m-15 font-bold px-4 py-2.5 rounded-full hover:bg-[#f74065] flex items-center"><img src={iconalterar}/>ALTERAR DADOS</a>
                </section>

                <p className="block m-3  text-center">{mensagem}</p>

            </section>


        </section>

        <Rodape/>
        </>
    )
}