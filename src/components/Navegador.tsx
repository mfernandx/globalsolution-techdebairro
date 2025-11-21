import logo from '/logotipo-techdebairro.png'
import iconperfil from '/icon-perfil.png';

export default function Navegador() {
    return(
        <>
        <nav className="flex justify-center items-center text-xl p-5  ">

            <img className="w-40 mr-10" src={logo} />
            
            <ul className="flex justify-center flex-1 list-none ">
            <li><a className="no-underline text-black font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#2000fc]" href="/"> Início </a></li>

            <li><a className="no-underline text-black font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#2000fc]" href="/funcionalidades"> Serviços </a></li>

            <li><a className="no-underline text-black font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#2000fc]"href="/doacao"> Doações </a></li>

            <li><a className="no-underline text-black font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#2000fc]" href="/faq"> FAQ </a></li>

            <li><a className="no-underline text-black font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#2000fc]" href="/contato"> Contato </a></li>

            <li><a className="no-underline text-black font-bold inline-block px-5 py-2.5 transition-all duration-200
                border-b-transparent hover:border-b-10 hover:border-[#2000fc]" href="/participantes"> Sobre nós </a></li>
            </ul>

            <a href="/login" className="  bg-[#f6617f] text-white font-bold px-4 py-2.5 rounded-full hover:bg-[#f74065] flex items-center"><img src={iconperfil}/>ÁREA DO ALUNO</a>
        </nav>
        
        </>
    )
}