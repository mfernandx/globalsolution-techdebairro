import {createContext, useEffect, useState} from "react"

type Estudante = { nomeEstudante: string, cpf: string, grauEscolaridade: string, telefone: number,email: string, senha: string, cep: string, cidade: string, bairro: string, rua: string, numero: number, complemento: string};

type AuthContextType = {
    estudante: Estudante | null,
    signed: boolean,
    login: (email: string, senha: string) => Promise <string | void>,
    cadastro: (nomeEstudante: string, cpf: string, grauEscolaridade: string, telefone: number, email: string, senha: string,cep: string, cidade: string, bairro: string, rua: string, numero: number,complemento:string ) => Promise<string | void>; 
    logout: (email:string, senha: string)=> Promise <string | void>,
}

type AuthProviderProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({children}:AuthProviderProps)=>{

    const [estudante, setEstudante] = useState<Estudante | null>(null)
    

    useEffect(()=>{

        const storedEstudante = localStorage.getItem("estudante_data");
        if (storedEstudante) {
            setEstudante(JSON.parse(storedEstudante));
        
        }
    },[])

    const cadastro = async (
        nomeEstudante: string, 
        cpf: string, 
        grauEscolaridade: string, 
        telefone: number, 
        email:string, 
        senha:string,
        cep:string,
        cidade:string,
        bairro:string,
        rua:string,
        numero:number,
        complemento:string
        ):  Promise < string | void> =>{

            try {
                const response = await fetch("http://localhost:8080/estudantes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                    nomeEstudante,
                    cpf,
                    grauEscolaridade,
                    telefone,
                    email,
                    senha,
                    endereco:{cep,cidade,bairro,rua,numero,complemento}
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.mensagem);
                }else{
                    alert(data.erro || "Erro ao se inscrever.");
                }
            } catch (error) {
            console.error(error);
            return "Erro de comunicação com o servidor.";
            }

    }

    

    const login = async (email: string, senha: string): Promise<string | void> => {

    try {

        const response = await fetch(`http://localhost:8080/estudantes/login/${encodeURIComponent(email)}/${encodeURIComponent(senha)}`);

        if (response.ok) {
            const estudanteData = await response.json();
            setEstudante(estudanteData);
            localStorage.setItem("estudante_data", JSON.stringify(estudanteData));
            return;

        } else if (response.status === 401 || response.status === 422) {
            const erroData = await response.json().catch(() => null);
            return erroData?.erro || "E-mail ou senha incorretos.";

        } else {
            return "Erro ao efetuar login.";
        }
        
    } catch (error) {
        console.error(error);
        return "Erro de comunicação com o servidor.";
    }
};


    const logout = async (email:string, senha:string): Promise <string | void> =>{
        try {
            const response = await fetch(
      `http://localhost:8080/estudantes/excluir/${encodeURIComponent(email)}/${encodeURIComponent(senha)}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
        localStorage.removeItem('estudante_data');
        setEstudante(null);
        return "Conta excluída com sucesso.";
        
    }else if (response.status === 422 || response.status === 401) {
        const text = await response.text();
        return text || "E-mail ou senha incorretos.";

    } else {
        return "Erro ao excluir conta.";
    }
        } catch (error) {
            console.error(error);
            return "Erro de comunicação com o servidor.";
        }
    }

    return(
        <AuthContext.Provider value={{estudante, signed: !!estudante, login, cadastro, logout}}>
            {children}
        </AuthContext.Provider>
    )
}