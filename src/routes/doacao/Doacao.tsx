import Cabecalho from "../../components/Cabecalho";
import Navegador from "../../components/Navegador";
import Rodape from "../../components/Rodape";
import doacoes from '/doacao-equipamentos.png'
import equipamentosusados from '/equipamentos-usados.png'
import iconpassoum from '/icon-passo-um.png'
import iconpassodois from '/icon-passo-dois.png'
import iconpassotres from '/icon-passo-tres.png'
import iconpassoquatro from '/icon-passo-quatro.png'
import iconpassocinco from '/icon-passo-cinco.png'
import iconpassoseis from '/icon-passo-seis.png'
import icondoacao from '/icon-doacao-branco.png'

export default function Doacao() {
    return(
        <>

        <Navegador/>

        <Cabecalho/>

        <section className='flex'>
        
            <section className='block p-15'>
        
                <section className=" items-center w-[900] flex justify-center mr-60">
                    <h2 className="text-6xl font-semibold w-[800] text-justify">Dê vida nova à sua<br></br>tecnologia com o <br></br>CicloTech.</h2>
                </section>
        
                <section className=" w-[700] flex justify-center mt-[25px] mr-25">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> O CicloTech é o programa de doações do Tech de Bairro, criado para dar um novo destino a equipamentos que ainda têm muito a oferecer. Nosso objetivo é impulsionar a economia circular, reduzindo o desperdício e ampliando o acesso à tecnologia para jovens e estudantes em situação de vulnerabilidade social.<br></br>Cada dispositivo doado é recuperado, preparado e entregue a quem 
                        precisa. Abaixo, montamos um passo a passo de como participar:</h4>

                </section>
        
            </section>   
        
                <section className='block mt-17'>
                    <img className="w-100"src={equipamentosusados} />
                </section>
        
        </section>

        <section className="block">

            <section className='flex justify-between bg-black p-8'> 

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={iconpassoum} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>FORMULÁRIO DE DOAÇÃO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Abaixo, você encontrará o botão <span className='font-bold text-[#f6617f] '>DOE AGORA</span>, que te encaminhará para um formulário rápido onde deverá ser informado o tipo de equipamento, seu estado de uso e seus dados de contato.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={iconpassodois}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>AGUARDE O CONTATO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Após o envio, nossa equipe analisa sua doação e retorna por telefone ou e-mail para confirmar suas informações e orientar sobre os próximos passos.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={iconpassotres} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>FORMA DE ENTREGA</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white '> Dependendo da sua localização e do tipo de equipamento, nós organizamos o melhor modo de recebê-lo: entrega em ponto parceiro, agendamento de coleta ou envio por transportadora ou correios.</p>
                </section>

            </section>
            <section className='flex justify-between bg-black p-8'> 

                <section className='block p-5 w-[400px]'>
                    <img className = 'justify-self-center' src={iconpassoquatro} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>TRIAGEM E REPARO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Assim que o equipamento chega até nós, ele passa por uma avaliação técnica. Caso necessário, realizamos pequenos reparos e limpeza para garantir que esteja funcional.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={iconpassocinco}/>
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>DESTINAÇÃO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white'> Os equipamentos são distribuídos a participantes que não possuem acesso a tecnologia, seguindo critérios de prioridade e impacto social. Aqui, cada doação vira oportunidade real.</p>
                </section>

                <section className='block p-5 w-[400px]'>
                    <img className='justify-self-center' src={iconpassoseis} />
                    <h3 className='text-2xl p-5 justify-self-center font-semibold text-[#f6617f]'>AGRADECIMENTO</h3>
                    <p className='text-justify w-[300px] justify-self-center font-extralight text-[20px] text-white '> Por fim, enviamos uma mensagem de confirmação para você saber que sua doação foi recebida e encaminhada corretamente. Cada gesto de apoio é valorizado e reconhecido.</p>
                </section>

            </section>

        </section>

        <section className='flex'>
        
            <section className='block p-15'>
        
                <section className=" items-center w-[900] flex justify-center mr-62">
                    <h2 className="text-6xl font-semibold w-[800] text-justify">Transforme hoje o<br></br>futuro de alguém<br></br>com sua doação.</h2>
                </section>
        
                <section className=" w-[700] flex justify-center mt-[25px] mr-25">
                    <h4 className="text-2xl w-[700px] text-justify font-light"> Seu equipamento usado pode mudar o futuro de um estudante. Ao doar celulares,
                        notebooks, tablets ou acessórios, você ajuda a reduzir o lixo eletrônico e garante que jovens em situação de vulnerabilidade tenham 
                        acesso às ferramentas necessárias para aprender e crescer.</h4>
                </section>

                <a href="/formulario-doacao" className=" w-50 bg-[#2000fc] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#005fa3] flex items-center mt-10"><img src={icondoacao}/>  ⠀DOE AGORA</a>
        
            </section>   
        
                <section className='block mt-15'>
                    <img className="w-100"src={doacoes} />
                </section>
        
        </section>



        <Rodape/>

        </>
    )
}