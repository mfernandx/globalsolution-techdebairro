import inclusaodigital from '/inclusao-digital.png'
import computadores from '/sala-computadores.png'
import comunidade from '/cenario-comunidade.png'
import Navegador from '../../components/Navegador'
import Rodape from '../../components/Rodape'
import Cabecalho from '../../components/Cabecalho'

export default function Home() {
    return(
        <>
        <Navegador/>

        <Cabecalho/>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify">Tecnologia que aproxima.<br></br>O futuro começa no <br></br>nosso bairro.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> <span className='font-bold text-[#f6617f] '>TECH DE BAIRRO</span> é um programa contínuo
                     de formação tecnológica que democratiza o acesso ao conhecimento e a dispositivos digitais. Seu principal objetivo é garantir que jovens de comunidades 
                     periféricas, com prioridade para estudantes de escolas públicas, possam acompanhar as transformações tecnológicas e se preparar para as profissões do 
                     futuro, independentemente de sua condição socioeconômica.</h4>
                </section>

            </section>   

                <section className='block mt-20'>
                    <img className="w-100"src={comunidade} />
                </section>

        </section>

        <section className="h-5 bg-[url('/background-page.png')] bg-cover mb-5"></section>

        <section className='flex mb-5'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center mr-18 ">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Educação, tecnologia e<br></br>comunidade em uma<br></br>mesma missão.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Nosso objetivo é simples e profundo: garantir que jovens de periferias tenham 
                        acesso ao conhecimento, às ferramentas e às oportunidades necessárias para participar ativamente da sociedade digital e construir seus
                        próprios futuros.</h4>
                </section>

            </section>   

                <section className='block mt-10'>
                    <img className="w-100"src={inclusaodigital} />
                </section>


        </section>

        <section className="h-5 bg-[url('/background-page.png')] bg-cover"></section>

        <section className='flex mb-5'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify"> Comunidades mais fortes<br></br>e preparadas para a nova<br></br>Era Digital.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> O <span className='font-bold text-[#f6617f] '>TECH DE BAIRRO</span> espera ampliar significativamente o acesso de
                        jovens à educação tecnológica, garantindo que estudantes de escolas públicas tenham condições reais de aprender, praticar e se inserir
                        no mundo digital.O resultado esperado é a formação de uma geração mais confiante, conectada e preparada para os desafios das carreiras do futuro,
                        promovendo inclusão, impacto social e transformação comunitária.</h4>
                </section>

            </section>   

                <section className='block mt-20'>
                    <img className="w-100"src={computadores} />
                </section>


        </section>

        <Rodape/>

        </>
    )
}