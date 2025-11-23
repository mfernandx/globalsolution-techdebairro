import Rodape from '../../components/Rodape'
import portalalunos from '/portal-alunos.png'
import NavegadorAluno from '../../components/NavegadorAluno'
import CabecalhoAluno from '../../components/CabecalhoAluno'

export default function HomeAluno() {
    return(
        <>
        <NavegadorAluno/>

        <CabecalhoAluno/>

        <section className='flex'>

            <section className='block p-15'>

                <section className=" items-center w-[900] flex justify-center mr-15">
                    <h2 className="text-6xl font-semibold w-[800] text-justify">Seu espaço seguro para<br></br>aprender, conectar e<br></br>transformar.</h2>
                </section>

                <section className=" w-[700] flex justify-center mt-[25px] mr-22">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> No <span className='font-bold text-[#f6617f] '>PORTAL DO ALUNO</span> você 
                    acessa conteúdos, trilhas formativas e materiais exclusivos pensados para acompanhar seu ritmo. Tudo em um só lugar, feito para facilitar
                     sua jornada digital. Ele foi criado para se adaptar às suas necessidades, oferecendo um espaço simples, intuitivo e preparado para apoiar seu aprendizado em qualquer dispositivo.</h4>
                </section>

            </section>   

                <section className='block mt-15'>
                    <img className="w-100"src={portalalunos} />
                </section>

        </section>

        

        

        <Rodape/>

        </>
    )
}