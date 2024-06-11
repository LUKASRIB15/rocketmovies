import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Background, SignUpHeader, SignUpLayout, SignUpMain } from "./styles"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signUp} = useAuth()

  function handleSignUp(event){
    event.preventDefault()

    signUp({name, email, password})

  }

  return (
    <SignUpLayout>
      <aside>
      <SignUpHeader>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </SignUpHeader>
      <SignUpMain>
        <h2>Crie sua conta</h2>
        <form onSubmit={handleSignUp}>
          <Input 
            label="Nome" 
            icon={FiUser} 
            placeholder="Nome" 
            type="text"
            onChange={e=>setName(e.target.value)}
          />
          <Input 
            label="E-mail" 
            icon={FiMail} 
            placeholder="E-mail" 
            type="email"
            onChange={e=>setEmail(e.target.value)}
          />
          <Input 
            label="Senha" 
            icon={FiLock} 
            placeholder="Senha" 
            type="password"
            onChange={e=>setPassword(e.target.value)}
          />

          <Button title={"Cadastrar"} type="submit"/>
        </form>
        <div>
          <FiArrowLeft size={16}/>
          <Link to="/">Criar conta</Link>
        </div>
      </SignUpMain>
      </aside>
      <Background/>
    </SignUpLayout>
  )
}