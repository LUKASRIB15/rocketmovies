import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { PickAvatar, ProfileForm, ProfileLayout } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import AvatarPlaceholderSvg from "../../assets/avatar-placeholder.svg"
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../libs/api";
import { useState } from "react";

export function Profile(){
  const {user, updateUser} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState("")
  const [password, setPassword] = useState("")
  const [avatarFile, setAvatarFile] = useState("")

  const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholderSvg

  function handleUpdateProfile(event){
    event.preventDefault()
    const userUpdated = {
      name,
      email,
      old_password: oldPassword,
      password
    }

    if(avatarFile){
      return updateUser(userUpdated, avatarFile)
    }

    updateUser(userUpdated)
  }

  return (
    <ProfileLayout>
      <header>
        <div>
          <FiArrowLeft size={16}/>
          <Link to="/">Voltar</Link>
        </div>
      </header>
      <ProfileForm onSubmit={handleUpdateProfile}>
        <div>
          <img 
            src={avatarFile ? URL.createObjectURL(avatarFile) : avatar}
            alt="Imagem de perfil do usuário Lucas Ribeiro"
          />
          <label htmlFor="avatar">
            <PickAvatar>
              <span className="sr-only">Escolher arquivo</span>
              <FiCamera size={20}/>
            </PickAvatar>
          </label>
          <input type="file" id="avatar" onChange={e => setAvatarFile(e.target.files[0])}/>
        </div>
        <Input 
          label={"Nome"} 
          placeholder={"Nome"} 
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
          disabled
        />
        <Input 
          label={"Email"} 
          placeholder={"Email"} 
          type="email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled
        />
        <Input 
          label={"SenhaAtual"} 
          placeholder={"Senha atual"} 
          type="password"
          icon={FiLock}
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input 
          label={"NovaSenha"} 
          placeholder={"Nova senha"} 
          type="password"
          icon={FiLock}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title={"Salvar"} type="submit"/>
      </ProfileForm>
    </ProfileLayout>
  )
}