import { Link } from "react-router-dom";
import { Input } from "../Input";
import { HeaderLayout, Profile } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import AvatarPlaceholderSvg from "../../assets/avatar-placeholder.svg"
import { api } from "../../libs/api";

export function Header({search, updateSearch}){
  const {user, signOut} = useAuth()

  const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholderSvg

  function handleSignOut(){
    signOut()
  }

  return (
    <HeaderLayout>
      <h2>RocketMovies</h2>
      <Input 
        label={"Pesquisar pelo título"} 
        placeholder={"Pesquisar pelo título"} 
        type="text"
        value={search}
        onChange={e=>updateSearch(e.target.value)}
      />
      <Profile>
        <div>
          <h3>{user.name}</h3>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to="/profile">
          <img 
            src={avatar}
            alt="Imagem de perfil do usuário"
          />
        </Link>
      </Profile>
    </HeaderLayout>
  )
}