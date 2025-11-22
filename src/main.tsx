import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Erro } from './routes/error/Erro.tsx'
import Home from './routes/home/Home.tsx'
import Funcionalidades from './routes/funcionalidades/Funcionalidades.tsx'
import Faq from './routes/faq/Faq.tsx'
import Participantes from './routes/participantes/Participantes.tsx'
import Contato from './routes/contato/Contato.tsx'
import Doacao from './routes/doacao/Doacao.tsx'
import FormularioDoacao from './routes/formulario-doacao/FormularioDoacao.tsx'
import Login from './routes/login/Login.tsx'
import Cadastro from './routes/cadastro/Cadastro.tsx'
import { AuthProvider } from './context/auth.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Erro/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/funcionalidades",
        element:<Funcionalidades/>
      },
      {
        path:"/doacao",
        element:<Doacao/>  
      },
      {
        path:"/formulario-doacao",
        element:<FormularioDoacao/>
      },
      {
        path:"/faq",
        element:<Faq/>
      },
      {
        path:"/participantes",
        element:<Participantes/>
      },
      {
        path:"/contato",
        element:<Contato/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/cadastro",
        element:<Cadastro/>
      }
    ]
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
