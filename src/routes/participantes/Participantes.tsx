import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";

export default function Participantes() {
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
                            <h2 className="text-6xl font-semibold w-[800] text-justify">Quem sonhou, criou e<br></br>conectou.</h2>
                </section>
        
                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                            <h4 className="text-2xl w-[700px] text-justify font-light"> O <span className='font-bold text-[#f6617f] '>TECH DE BAIRRO</span> nasceu da união de 
                            pessoas comprometidas com inovação, inclusão e impacto social. Nossa equipe reúne estudantes que acreditam no poder da comunidade. Juntos, trabalhamos
                            para aproximar jovens do mundo digital e construir caminhos reais e justos para o futuro.</h4>
                </section>
        
            </section>   
        
        </section>

        <Rodape/>
        </>
    )
}