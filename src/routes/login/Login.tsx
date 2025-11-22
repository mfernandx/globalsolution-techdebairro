import { Link, useNavigate } from "react-router-dom";
import iconretornar from '/icon-retornar-branco.png';
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

export default function Login() {

    const {login} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        if(name === 'email') setEmail(value)
        if(name === 'senha') setSenha(value)
    }

    const handleLogin = async (e: React.FormEvent)=>{
        e.preventDefault()
        if(!email || !senha){
            setError('Preencha todos os campos.')
            return
        }
        const res = await login(email, senha)
        if(res){
            setError(res)
            setEmail('')
            setSenha('')
            return
        }

        alert('Login realizado com sucesso!');
        navigate('/home-aluno')
    }    



    return(
        <>
        <div className="min-h-screen flex">
            <div className="bg-[url('/gif-page.gif')] bg-cover bg-left w-2/4 flex flex-col justify-center items-center">

                
            </div>
            <div className="w-2/4  mim-h-screen flex flex-col justify-center items-center">
                <a href="/" className=" w-40 h-14 bg-[#2000fc] text-white font-bold px-4 py-2.5 rounded-full hover:bg-[#005fa3] flex items-center ml-120 mt-10"><img src={iconretornar}/>⠀VOLTAR</a>
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-3xl bg-black }" onSubmit={handleLogin} >

                    <h1 className="text-5xl text-center text-white font-bold m-6">Entrar</h1>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="email"
                    placeholder=" Digite o seu e-mail:" name="email" value={email} onChange={handleChange}/>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="password" 
                    placeholder=" Digite sua senha:" name="senha" value={senha} onChange={handleChange} />
                    
                    <span className="block m-3 text-red-500 text-center">{error}</span>

                    <button className="block m-auto bg-[#f04f6f] hover:bg-[#f74065] py-2 px-14 rounded-3xl  text-white font-bold mt-5"
                    type="submit">ENTRAR</button>

                    <div>
                    <section className="justify-self-center">
                        <span className="inline-block mt-4 me-3 text-white">Não tem uma conta?</span>
                        <Link className="text-white hover:text-[#f74065] " to={'/cadastro'}>Criar uma conta</Link>
                    </section>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}