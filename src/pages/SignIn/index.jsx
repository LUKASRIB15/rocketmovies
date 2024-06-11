import {FiMail, FiLock} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Background, SignInHeader, SignInLayout, SignInMain } from "./styles"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"

export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth()

  function handleSignIn(event){
    event.preventDefault()
    signIn({email, password})
  }

  return (
    <SignInLayout>
      <aside>
      <SignInHeader>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </SignInHeader>
      <SignInMain>
        <h2>Faça seu login</h2>
        <form onSubmit={handleSignIn}>
          <Input 
            label="E-mail" 
            icon={FiMail} 
            placeholder="E-mail" 
            type="email"
            onChange={(event)=>setEmail(event.target.value)}
          />
          <Input 
            label="Senha" 
            icon={FiLock} 
            placeholder="Senha" 
            type="password"
            onChange={(event)=>setPassword(event.target.value)}
          />

          <Button title={"Entrar"} type="submit"/>
        </form>
        <Link to="/register">Criar conta</Link>
      </SignInMain>
      </aside>
      <Background/>
    </SignInLayout>
  )
}