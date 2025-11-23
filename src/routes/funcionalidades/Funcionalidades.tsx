import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";
import transformacaosocial from '/transformacao-social.png'
import alfabetizacaodigital from '/icon-alfabetizacao-digital.png'
import economiacircular from '/icon-economia-circular.png'
import inclusaodigital from '/icon-inclusao-digital.png'
import acessibilidade from '/icon-acessibilidade.png'
import autoestima from '/icon-autoestima.png'
import redesdeapoio from '/icon-redeapoio.png' 
import flexibilidade from '/icon-flexibilidade.png'
import materialeducativo from '/icon-materialeducativo.png'
import desafiosreais from '/icon-desafiosreais.png'
import empregabilidade from '/icon-empregabilidade.png'
import monitoramento from '/icon-monitoramento.png'
import apoiocomunitario from '/icon-apoiocomunitario.png'
import Cabecalho from "../../components/Cabecalho";

export default function Funcionalidades() {
    return(
        <>
        <Navegador/>

        <Cabecalho/>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify mr-35">Serviços focados em<br></br> transformação social<br></br> e autonomia.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> O <span className='font-bold text-[#f6617f] '>TECH DE BAIRRO</span> oferece uma gama de diferenciais focados em fornecer uma experiência completa de inclusão digital, unindo formação contínua, suporte comunitário e oportunidades reais de crescimento. Tudo pensado para ampliar o acesso, fortalecer habilidades e abrir portas para o futuro digital.</h4>
                </section>

            </section>   

                <section className='block mt-12'>
                    <img className="w-100"src={transformacaosocial} />
                </section>

        </section>

        <section className="block">

            <section className='flex justify-between bg-black p-8'> 

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={alfabetizacaodigital} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>ALFABETIZAÇÃO DIGITAL</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Acesso ao conhecimento de forma simples e prática. Ensinar desde o básico permite que cada aluno desenvolva autonomia, foco e segurança para navegar, aprender e usufruir do mundo tecnológico.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={economiacircular}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>ECONOMIA CIRCULAR</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Atuamos recebendo, reparando e redistribuindo os equipamentos tecnológicos doados, promovendo a economia circular e garantindo que cada estudante possa aprender com dignidade.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={inclusaodigital} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>INCLUSÃO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white '> Compreendemos e respeitamos as limitações individuais de cada estudante, seja falta de dispositivos, baixa conectividade ou dificuldade de aprendizagem, e oferecemos caminhos personalizados para sua evolução.</p>
                </section>

            </section>


            <section className='flex justify-between p-8'> 

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={acessibilidade} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#a223c4]'>ACESSIBILIDADE</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Todos os materiais são pensados para diferentes necessidades e ritmos, priorizamos uma linguagem simples, vídeos curtos, formatos adaptados e foco em dispositivos de baixa performance.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={autoestima}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#a223c4]'>AUTOESTIMA</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Ao aprender novas habilidades e participar da comunidade Tech de Bairro, os jovens descobrem sua capacidade de criar, inovar e se enxergar como protagonistas do próprio futuro.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={redesdeapoio} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#a223c4]'>REDES DE APOIO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'>O projeto funciona em parceria com ONGs, escolas públicas e órgãos governamentais, garantindo capilaridade, apoio pedagógico e acompanhamento próximo.</p>
                </section>

            </section>


            <section className='flex justify-between bg-black p-8'> 

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={flexibilidade} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>FLEXIBILIDADE</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Com conteúdos mensais acessíveis pelo celular e atividades de curta duração, o projeto é remoto, e se adapta às rotinas e limitações dos estudantes, permitindo que jovens participem mesmo sem se deslocar.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={materialeducativo}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>MATERIAIS EDUCATIVOS</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Todos os meses, os participantes recebem um conjunto de materiais educativos, como apostilas, vídeo-aulas, desafios e tarefas para aprendizagem e indicações de ferramentas gratuitas.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={desafiosreais} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>DESAFIOS REAIS</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white '> Propomos atividades conectadas ao cotidiano dos jovens e às necessidades de seus bairros. Isso torna o aprendizado cada vez mais significativo e incentiva o uso da tecnologia para resolver problemas reais.</p>
                </section>

            </section>


            <section className='flex justify-between p-8'> 

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={apoiocomunitario} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#a223c4]'>APOIO COMUNITÁRIO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Ao envolver moradores, escolas e organizações locais, fortalecemos laços, criamos oportunidades e valorizamos o talento que já existe no território, buscando reduzir o isolamento social.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={empregabilidade}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#a223c4]'>EMPREGABILIDADE</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Preparamos jovens para o mercado e para profissões em ascensão. Ao desenvolver competências digitais, criatividade e autonomia, visamos ampliar suas chances de inserção profissional e geração de renda.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={monitoramento} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#a223c4]'>MONITORAMENTO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px]'> Acompanhamento de frequência e progresso com atenção humana, possibilitando o ajuste de materiais, oferecimento de suporte e garantia de que cada participante evolua de forma consistente e significativa.</p>
                </section>

            </section>


        </section>



        <Rodape/>   
        </>
    )
}