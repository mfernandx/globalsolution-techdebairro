

export default function FormularioDoacao() {
    return(
        <> 
        <section className="min-h-screen flex">

            <section className="bg-[url('/background-page-2.png')] bg-cover bg-center w-2/4 flex flex-col justify-center items-center text-white"></section>

            <section className="w-2/4 min-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 rounded-3xl bg-black"  >
                    <h1 className="text-2xl text-center font-bold m-3 text-white">Sobre o doador:</h1>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder=" Nome do doador:" name="nomeDoador" />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder=" Tipo de doador:" name="tipoDoador" />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="tel"
                    placeholder=" Telefone para contato:" name="telefone"/>

                    <h1 className="text-2xl text-center font-bold m-3 text-white">Sobre a doação:</h1>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder=" Tipo do equipamento:" name="tipoEquipamento" />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder=" Marca:" name="marca"/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder=" Modelo:" name="modelo"/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder=" Descrição do estado atual:" name="descricaoEstado" />
                    
            
                    <button className="block m-auto bg-[#f04f6f] hover:bg-[#f74065] py-2 px-14 mt-3 rounded-3xl text-white font-bold"
                    type="submit">ENVIAR</button>
                
                </form>

            </section>
        </section>
        </>
    )
}
