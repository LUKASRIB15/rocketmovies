import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { PickAvatar, ProfileForm, ProfileLayout } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
  return (
    <ProfileLayout>
      <header>
        <div>
          <FiArrowLeft size={16}/>
          <a href="#">Voltar</a>
        </div>
      </header>
      <ProfileForm>
        <div>
          <img 
            src="https://github.com/LUKASRIB15.png"
            alt="Imagem de perfil do usuário Lucas Ribeiro"
          />
          <label htmlFor="avatar">
            <PickAvatar>
              <span className="sr-only">Escolher arquivo</span>
              <FiCamera size={20}/>
            </PickAvatar>
          </label>
          <input type="file" id="avatar"/>
        </div>
        <Input 
          label={"Nome"} 
          placeholder={"Nome"} 
          type="text"
          icon={FiUser}
        />
        <Input 
          label={"Email"} 
          placeholder={"Email"} 
          type="email"
          icon={FiMail}
        />
        <Input 
          label={"SenhaAtual"} 
          placeholder={"Senha atual"} 
          type="password"
          icon={FiLock}
        />
        <Input 
          label={"NovaSenha"} 
          placeholder={"Nova senha"} 
          type="password"
          icon={FiLock}
        />
        <Button title={"Salvar"}/>
      </ProfileForm>
    </ProfileLayout>
  )
}