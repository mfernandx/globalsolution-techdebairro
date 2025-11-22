import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Cadastro() {
    const [nomeEstudante, setNomeEstudante] = useState ('')
    const [cpf, setCPF] = useState ('')
    const [grauEscolaridade, setGrauEscolaridade] = useState ('')
    const [telefone, setTelefone] = useState ('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirm, setSenhaConfirm] = useState('')
    const [cep,setCep] = useState('')
    const [cidade,setCidade] = useState('')
    const [bairro,setBairro] = useState('')
    const [rua,setRua] = useState('')
    const [numero,setNumero] = useState('')
    const [complemento,setComplemento] = useState('')
    const [error, setError] = useState('')
    const {cadastro} = useAuth()
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        if(name === 'nomeEstudante') setNomeEstudante (value)
        if(name === 'cpf') setCPF (value)
        if(name === 'grauEscolaridade') setGrauEscolaridade (value)
        if(name === 'telefone') setTelefone (value)
        if(name === 'email') setEmail(value)
        if(name === 'senha') setSenha(value)
        if(name === 'senhaConfirm') setSenhaConfirm(value)
        if(name === 'cep') setCep(value)
        if(name === 'cidade') setCidade(value)
        if(name === 'bairro') setBairro(value)
        if(name === 'rua') setRua(value)
        if(name === 'numero') setNumero(value)
        if(name === 'complemento') setComplemento(value)
           
    }

    const handleCadastro = async (e: React.FormEvent)=>{
        e.preventDefault()
        if(!nomeEstudante || !cpf || !grauEscolaridade || !telefone || !email || !senha || !senhaConfirm || !cep || !cidade || !bairro || !rua || !numero || !complemento){
            setError('Todos os campos são obrigatórios.')
            return
        }else if(senha !== senhaConfirm){
            setError('As senhas não são iguais.')
            return
        }
        const res = await cadastro(nomeEstudante,cpf,grauEscolaridade,Number (telefone),email, senha, cep,cidade,bairro,rua,Number(numero),complemento)
        if(res){
            setError(res)
            return
        }
        alert('Inscrição feita com sucesso!')
        navigate('/login')

    }



    return(
        <>

        <section className="min-h-screen flex">

            <section className="bg-[url('/background-page-2.png')] bg-cover bg-center w-2/4 flex flex-col justify-center items-center text-white"></section>

            <section className="w-2/4 min-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-3xl bg-black"  onSubmit={handleCadastro}>
                    <h1 className="text-5xl text-center text-white font-bold m-6">Criar conta</h1>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder="Nome completo:" name="nomeEstudante" value={nomeEstudante} onChange={handleChange} />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="number"
                    placeholder="CPF:" name="cpf" value={cpf} onChange={handleChange}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder="Grau de escolaridade:" name="grauEscolaridade" value={grauEscolaridade} onChange={handleChange} />

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="tel"
                    placeholder="Telefone para contato:" name="telefone" value={telefone} onChange={handleChange} />
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="email"
                    placeholder="E-mail:" name="email" value={email} onChange={handleChange}/>
                    
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="password"
                    placeholder="Senha:" name="senha" value={senha} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="senha"
                    placeholder="Confirme sua senha:" name="senhaConfirm" value={senhaConfirm} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="number"
                    placeholder="CEP:" name="cep" value={cep} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder="Cidade:" name="cidade" value={cidade} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder="Bairro:" name="bairro" value={bairro} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder="Rua:" name="rua" value={rua} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="number"
                    placeholder="Número:" name="numero" value={numero} onChange={handleChange}/>

                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-3xl bg-white" type="text"
                    placeholder="Complemento:" name="complemento" value={complemento} onChange={handleChange} />

                    <span className="block m-3 text-red-500 text-center">{error}</span>
                    
                
                    <button className="block m-auto bg-[#f04f6f] hover:bg-[#f74065] py-2 px-14 rounded-3xl text-white font-bold"
                    type="submit">Cadastrar</button>

                    <section className="text-center">
                        <span className="inline-block mt-4 me-3">Já possui uma conta?</span>
                        <Link className="text-blue-600" to={'/login'}>Ir para o login</Link>
                    </section>

                </form>

            </section>
        </section>

        </>
    )
}