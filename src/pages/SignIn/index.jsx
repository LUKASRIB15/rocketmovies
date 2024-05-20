import {FiMail, FiLock} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Background, SignInHeader, SignInLayout, SignInMain } from "./styles"
import { Link } from "react-router-dom"

export function SignIn(){
  return (
    <SignInLayout>
      <aside>
      <SignInHeader>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </SignInHeader>
      <SignInMain>
        <h2>Faça seu login</h2>
        <form>
          <Input label="E-mail" icon={FiMail} placeholder="E-mail" type="email"/>
          <Input label="Senha" icon={FiLock} placeholder="Senha" type="password"/>

          <Button title={"Entrar"} type="submit"/>
        </form>
        <Link to="/register">Criar conta</Link>
      </SignInMain>
      </aside>
      <Background/>
    </SignInLayout>
  )
}