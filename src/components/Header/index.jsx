import { Link } from "react-router-dom";
import { Input } from "../Input";
import { HeaderLayout, Profile } from "./styles";

export function Header(){
  return (
    <HeaderLayout>
      <h2>RocketMovies</h2>
      <Input 
        label={"Pesquisar pelo título"} 
        placeholder={"Pesquisar pelo título"} 
        type="text"
      />
      <Profile>
        <div>
          <h3>Lucas Ribeiro</h3>
          <button>sair</button>
        </div>
        <Link to="/profile">
          <img 
            src="https://github.com/LUKASRIB15.png"
            alt="Imagem de perfil do usuário"
          />
        </Link>
      </Profile>
    </HeaderLayout>
  )
}