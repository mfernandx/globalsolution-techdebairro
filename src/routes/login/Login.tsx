import { Link } from "react-router-dom";

export default function Login() {

    return(
        <>
        <div className="min-h-screen flex">
            <div className="bg-[url('/background-page-2.png')] bg-cover bg-center w-2/4 flex flex-col justify-center items-center">

                
            </div>
            <div className="w-2/4  mim-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-3xl bg-black" >

                    <h1 className="text-5xl text-center text-white font-bold m-6">Entrar</h1>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="email"
                    placeholder="Digite o seu e-mail:" name="email"  />
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="password" 
                    placeholder="Digite sua senha:" name="senha" />
                    

                    <button className="block m-auto bg-[#f04f6f] hover:bg-[#f74065] py-2 px-14 rounded-3xl  text-white font-bold"
                    type="submit">Entrar</button>

                    <div>
                    <section className="justify-self-center">
                        <span className="inline-block mt-4 me-3 ">Não tem uma conta?</span>
                        <Link className="text-white " to={'/cadastro'}>Criar uma conta</Link>
                    </section>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}