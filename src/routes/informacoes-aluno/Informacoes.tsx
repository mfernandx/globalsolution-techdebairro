import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import NavegadorAluno from "../../components/NavegadorAluno";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";

export default function Informacoes() {

    const { estudante} = useContext(AuthContext);
    

    if (!estudante) {
        return <p>Você precisa estar logado para ver suas informações.</p>;
    }

    return(
        <>
        <NavegadorAluno/>
        <Cabecalho/>

        <section className="p-6 bg-[#e9eded] mb-10">
            <h1 className="text-5xl font-bold mb-4 ml-10">Minhas Informações</h1>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Nome:</strong> {estudante.nomeEstudante}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>CPF:</strong> {estudante.cpf}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Grau de escolaridade:</strong> {estudante.grauEscolaridade}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Email:</strong> {estudante.telefone}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Telefone:</strong> {estudante.email}</p>

            <h1 className="text-5xl font-bold ml-10 mt-10">Meu endereço</h1>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>CEP:</strong> {estudante.endereco.cep}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Cidade:</strong> {estudante.endereco.cidade}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Bairro:</strong> {estudante.endereco.bairro}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Rua:</strong> {estudante.endereco.rua}</p>
            <p className="ml-10 mt-2 text-2xl font-light"><strong>Complemento:</strong> {estudante.endereco.numero}</p>
            
        </section>

        <Rodape/>
        </>
    )
}