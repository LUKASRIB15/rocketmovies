import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Background, SignUpHeader, SignUpLayout, SignUpMain } from "./styles"
import { Link } from "react-router-dom"

export function SignUp(){
  return (
    <SignUpLayout>
      <aside>
      <SignUpHeader>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
      </SignUpHeader>
      <SignUpMain>
        <h2>Crie sua conta</h2>
        <form>
          <Input label="Nome" icon={FiUser} placeholder="Nome" type="text"/>
          <Input label="E-mail" icon={FiMail} placeholder="E-mail" type="email"/>
          <Input label="Senha" icon={FiLock} placeholder="Senha" type="password"/>

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