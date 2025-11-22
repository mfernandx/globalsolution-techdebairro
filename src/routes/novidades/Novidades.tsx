
import Cabecalho from "../../components/Cabecalho";
import NavegadorAluno from "../../components/NavegadorAluno";
import Rodape from "../../components/Rodape";
import segurancadigital from '/seguranca-digital.png'
import uxwriting from '/ux-writing.png'
import cidadaniadigital from '/cidadania-digital.png'

export default function Novidades() {
    return(
        <>
        <NavegadorAluno/>
        <Cabecalho/>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center">
                    <h2 className="text-6xl font-semibold w-[800] text-justify mr-40">Proteja seus dados e<br></br>navegue na internet <br></br>com confiança.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Com o curso de <span className='font-bold text-[#f6617f] '>SEGURANÇA DIGITAL</span> você vai descobrir que a segurança online é 
                    essencial, principalmente para quem está começando no mundo digital. Nesta trilha, você descobre como identificar golpes, proteger informações e usar
                    a tecnologia de forma mais segura.</h4>
                </section>

            </section>   

                <section className='block mt-10'>
                    <img className="w-100"src={segurancadigital} />
                </section>

        </section>

        <section className="h-5 bg-[url('/background-page.png')] bg-cover mb-5"></section>

        <section className='flex mb-5'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center mr-20 ">
                    <h2 className="text-6xl font-semibold w-[800] text-justify">Aprenda a transformar<br></br>ideias em experiências<br></br>que encantam.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"><span className='font-bold text-[#f6617f] '>UX DESIGN</span> é sobre criar produtos que façam sentido, sejam bonitos e fáceis de usar. 
                    Nesta trilha, você descobre como pensar como um designer, ouvir usuários, criar protótipos e desenvolver soluções centradas nas pessoas — sem precisar de conhecimento técnico avançado.</h4>
                </section>

            </section>   

                <section className='block mt-10'>
                    <img className="w-100"src={uxwriting} />
                </section>


        </section>

        <section className="h-5 bg-[url('/background-page.png')] bg-cover"></section>

        <section className='flex mb-5'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center mr-30">
                    <h2 className="text-6xl font-semibold w-[800] text-justify">Use a tecnologia para<br></br>transformar a sua<br></br>comunidade.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> A trilha de <span className='font-bold text-[#f6617f] '>CIDADANIA DIGITAL</span> mostra como participar da vida digital com consciência: identificar notícias falsas, entender seus direitos online e usar plataformas digitais para fortalecer sua comunidade.</h4>
                </section>

            </section>   

                <section className='block mt-10'>
                    <img className="w-100"src={cidadaniadigital} />
                </section>


        </section>

        <Rodape/>

        </>
    )
}