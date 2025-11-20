import { useState } from "react";
import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";
import comunidade from '/cenario-comunidade.png'
import logotipo from '/logotipo-techdebairro.png'

type ExibePerguntas = {
    id: string;
    pergunta: string,
    vermais?: boolean,
    children: React.ReactNode;
    estado? : (id:string) => void,

};

function ExibePerguntas({id, pergunta,children, vermais = false, estado}: ExibePerguntas){
    return(
        
    <section className="w-full">
      <button
        type="button"
        aria-expanded={vermais}
        aria-controls={`panel-${id}`}
        onClick={() => estado && estado(id)}
        className={`w-full flex items-center justify-between px-8 py-6 md:px-12 md:py-8 text-left rounded-lg transition-shadow
          ${vermais ? "bg-gray-200 shadow-sm" : "bg-[#e9eded] hover:bg-gray-200" }`}>

        <section className="text-3xl font-medium text-gray-800">{pergunta}</section>

        <img src={vermais ? "iconmenos.png" : "iconmais.png"} />

      </button>

      <section
        id={`panel-${id}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-white px-8 md:px-12 rounded-b-lg border-t border-gray-100 
          ${vermais ? "max-h-65 py-4" : "max-h-0 py-0 "}`}>

        <section className=" font-extralight text-2xl text-gray-700 text-justify">{children}</section>
      </section>

    </section>
  );
}

export default function Faq() {

    const perguntas = [
        {id: "pergunta1", pergunta: "Quem pode participar do Tech de Bairro? ", resposta: "O programa é voltado principalmente para jovens de comunidades periféricas, de 14 a 24 anos, com prioridade para estudantes de escolas públicas. No entanto, qualquer pessoa em situação de vulnerabilidade social interessada em aprender sobre tecnologia pode se inscrever, eventualmente abrimos vagas para adultos interessados, dependendo da turma e dos recursos disponíveis."},
        {id: "pergunta2", pergunta: "É preciso ter computador ou internet para participar? ", resposta: "Não. O programa foi criado para ser acessível mesmo para quem tem dispositivos antigos, acesso limitado à internet ou depende de Wi-Fi público. Os materiais são leves, fáceis de acessar e funcionam direto no celular. Além disso, estudantes sem dispositivos podem receber equipamentos doados através do programa."},
        {id: "pergunta3", pergunta: "Como funciona o envio dos materiais educativos?", resposta: "Basta estar inscrito no programa e manter seus dados atualizados. Os materiais são enviados por e-mail, WhatsApp ou entregues em domicílio em formato impresso quando necessário, sempre considerando o acesso mais fácil para cada estudante."},
        {id: "pergunta4" , pergunta: "O programa tem algum custo para o participante?", resposta: "Não. Todo o conteúdo educativo, acompanhamento e redistribuição de equipamentos são gratuitos, graças às doações e às parcerias com escolas, ONGs e órgãos públicos."},
        {id: "pergunta5" , pergunta: "As atividades contam como certificado?", resposta: "Sim. Após concluir cada ciclo mensal de aprendizagem, os participantes recebem um certificado que comprova sua participação e dedicação."},
        {id: "pergunta6" , pergunta: "Quais são as limitações do Tech de Bairro?", resposta: "As vagas são limitadas, já que dependem da quantidade de equipamentos disponíveis, dos espaços parceiros e da capacidade da equipe de acompanhamento. Além disso, o programa não oferece certificação formal, mas sim um certificado de participação. Também é importante destacar que o programa não substitui cursos técnicos ou superiores, mas serve como uma introdução e preparação para esses caminhos."},
        {id: "pergunta7", pergunta: "Como funciona a seleção de participantes?", resposta: "A seleção ocorre por inscrição e análise de perfil. O interessado preenche uma inscrição com informações básicas sobre sua situação escolar, acesso à tecnologia e contexto familiar. A equipe analisa cada caso levando em conta critérios de prioridade, como estudar em escola pública, estar em situação de vulnerabilidade social, não possuir equipamentos tecnológicos e demonstrar interesse em aprender."}
    ];

    const [pegaId, setPegaId] = useState<string | null>(null);

    function alterna(id: string) {
    setPegaId((prev) => (prev === id ? null : id));
    }


    return(
        <>
        <Navegador/>

        <header className="h-100 p-6 bg-[url('/background-page.png')] bg-cover ">

            <h1 className="font-bold text-white mt-25 ml-7 text-7xl">Tecnologia que chega, permanece e transforma.</h1>
            <h3 className='font-bold text-white mt-10 ml-10 text-2xl '>Bem-vindo ao portal do <span className='font-extrabold text-[#f6617f] '>TECH DE BAIRRO</span>.</h3>
            
        </header>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify mr-48">Tire suas dúvidas e<br></br>conecte seu futuro.</h2>
                </section>

                <section className=" w-[600] flex justify-center mt-[25px] mr-45">
                    <h4 className="text-2xl w-[600px] text-justify font-light"> Aqui você encontra respostas para as dúvidas mais comuns sobre a plataforma <span className='font-bold text-[#f6617f] '>TECH DE BAIRRO</span> e suas funcionalidades. Nosso objetivo é facilitar o acesso e esclarecer cada etapa, garantindo que todos entendam seu funcionamento e como podem fazer parte dessa transformação. Caso não encontre o que está procurando, entre em contato com a nossa equipe.</h4>
                </section>

            </section>   

                <section className='block mt-35'>
                    <img className="w-100 "src={logotipo} />
                </section>

        </section>

        <section className="h-5 bg-[url('/background-page.png')] bg-cover mb-5"></section>

        <section className="min-h-screen flex items-start justify-center py-10 ">
            
            <section className="w-full max-w-6xl">

                <section className="space-y-3">
                {perguntas.map((pergunta) => (
                    <ExibePerguntas
                    key={pergunta.id}
                    id={pergunta.id}
                    pergunta={pergunta.pergunta}
                    vermais={pegaId === pergunta.id}
                    estado={alterna}
                    >
                    {pergunta.resposta}
                    </ExibePerguntas>
                ))}
                </section>
            </section>
        </section>



        <Rodape/> 
        </>
    )
}