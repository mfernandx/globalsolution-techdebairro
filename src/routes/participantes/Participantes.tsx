import Cabecalho from "../../components/Cabecalho";
import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";
import fotobeatriz from '/fotobeatriz.png'
import fotofernanda from '/fotofernanda.png'
import fotogiovana from '/fotogiovana.png'
import icongithub from '/icongithub.png'
import iconlinkedin from '/iconlinkedin.png'
import logotipo from '/logotipo-techdebairro.png'

export default function Participantes() {
    return(
        <>
        <Navegador/>

        <Cabecalho/>


        <section className='flex'>
        
            <section className='block p-15'>
        
                <section className=" items-center w-[900] flex justify-center mr-30">
                            <h2 className="text-6xl font-semibold w-[800] text-justify">Quem sonhou, criou e<br></br>conectou.</h2>
                </section>
        
                <section className=" w-[600] flex justify-center mt-[25px] mr-48">
                            <h4 className="text-2xl w-[600px] text-justify font-light"> O <span className='font-bold text-[#f6617f] '>TECH DE BAIRRO</span> nasceu da união de 
                            pessoas comprometidas com inovação, inclusão e impacto social. Nossa equipe reúne estudantes que acreditam no poder da comunidade. Juntos, trabalhamos
                            para aproximar jovens do mundo digital e construir caminhos reais e justos para o futuro.</h4>
                </section>
        
            </section> 

                <section className='block mt-30'>
                    <img className="w-100"src={logotipo} />
                </section>  
        
        </section>

        <section className="h-5 bg-[url('/background-page.png')] bg-cover mb-5"></section>

        <section className='flex justify-between p-16'>

            <section className="block bg-[#e9eded] rounded-2xl p-2 hover:drop-shadow-[0_0_2em_#2000fc]">

                <img className="h-85 "src={fotobeatriz} />
                <h3 className='justify-self-center text-2xl font-bold p-2'> Beatriz de Sousa Franco</h3>
                <h3 className='justify-self-center text-2xl font-extralight'> 1TDSPI - RM: 563686</h3>

            <section className='flex justify-center p-4'>

                <section className='flex p-2'>
                    <img className='w-10'src={icongithub}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-5 hover:border-black' href='https://github.com/biazxz'>GITHUB</a>
                </section>
            
                <section className='flex p-2'>
                    <img className='w-10'src={iconlinkedin}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-5 hover:border-[#0077C8]' href='https://www.linkedin.com/in/beatriz-franco-52970824a'>LINKEDIN</a>
                </section>

            </section>
            

        </section>



        <section className="block bg-[#e9eded] rounded-2xl p-2 hover:drop-shadow-[0_0_2em_#a223c4]">

            <img className="h-85 " src={fotogiovana}/>
            <h3 className='justify-self-center text-2xl font-bold p-2'> Giovana Souza Vieira </h3>
            <h3 className='justify-self-center text-2xl font-extralight'> 1TDSPI - RM: 564430</h3>

            <section className='flex justify-center p-4'>

                <section className='flex p-2'>
                    <img className='w-10'src={icongithub}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-5 hover:border-black' href='https://github.com/medusah25'>GITHUB</a>
                </section>
            
                <section className='flex p-2'>
                    <img className='w-10'src={iconlinkedin}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-5 hover:border-[#0077C8]' href='https://www.linkedin.com/in/giovana-souza-js '>LINKEDIN</a>
                </section>

            </section>

        </section>



        <section className="block bg-[#e9eded] rounded-2xl p-2 hover:drop-shadow-[0_0_2em_#f6617f]">

            <img className="h-85" src={fotofernanda}/>
            <h3 className='justify-self-center text-2xl font-bold p-2'> Maria Fernanda Santos </h3>
            <h3 className='justify-self-center text-2xl font-extralight'> 1TDSPI - RM: 565277 </h3>

            <section className='flex justify-center p-4'>

                <section className='flex p-2'>
                    <img className='w-10'src={icongithub}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-5 hover:border-black' href='https://github.com/mfernandx'>GITHUB</a>
                </section>
            
                <section className='flex p-2'>
                    <img className='w-10'src={iconlinkedin}/>
                    <a className='font-bold ml-[7px] mt-[7px] border-b-transparent hover:border-b-5 hover:border-[#0077C8]' href='https://www.linkedin.com/in/maria-fernanda-santos-mendes-39b151219/ '>LINKEDIN</a>
                </section>

            </section>

            

        </section>
    </section>

        <Rodape/>
        </>
    )
}