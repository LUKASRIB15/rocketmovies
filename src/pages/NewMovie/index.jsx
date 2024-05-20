import { FiArrowLeft } from "react-icons/fi"
import {Header} from "../../components/Header"
import { Input } from "../../components/Input"
import { NewMovieLayout, NewMovieMain } from "./styles"
import { Textarea } from "../../components/Textarea"
import { Markers } from "../../components/Markers"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function NewMovie(){
  return(
    <NewMovieLayout>
      <Header />
      <NewMovieMain>
        <div>
          <FiArrowLeft size={16}/>
          <Link to="/">Voltar</Link>
        </div>
        <h1>Novo filme</h1>
        <Input 
          label={"nota"}
          placeholder={"Sua nota (de 0 a 5)"}
          type="text"
        />
        <Input 
          label={"titulo"}
          placeholder={"Título"}
          type="text"
        />
        <Textarea 
          placeholder="Observações"
        />
        <div>
          <h2>Marcadores</h2>
          <div>
            <Markers value="React"/>
            <Markers newMarker placeholder="Novo marcador"/>
          </div>
        </div>
        <Button title={"Excluir filme"} dark/>
        <Button title={"Salvar alterações"}/>
      </NewMovieMain>
    </NewMovieLayout>
  )
}