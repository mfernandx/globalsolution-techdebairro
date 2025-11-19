import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";

export function Contato() {
    return(
        <>
        <Navegador/>
        
        <header className="h-100 p-6 bg-[url('/background-page.png')] bg-cover ">

            <h1 className="font-bold text-white mt-25 ml-7 text-7xl">Tecnologia que chega, permanece e transforma.</h1>
            <h3 className='font-bold text-white mt-10 ml-10 text-2xl '>Bem-vindo ao portal do <span className='font-extrabold text-[#f6617f] '>TECH DE BAIRRO</span>.</h3>
            
        </header>

        <Rodape/>
        </>
    )
}