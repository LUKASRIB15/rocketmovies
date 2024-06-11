import { FiArrowLeft } from "react-icons/fi"
import {Header} from "../../components/Header"
import { Input } from "../../components/Input"
import { NewMovieLayout, NewMovieMain } from "./styles"
import { Textarea } from "../../components/Textarea"
import { Markers } from "../../components/Markers"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../libs/api"

export function NewMovie(){
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState=>[...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deletedTag){
    const tagsWithoutDeletedOne = tags.filter(tag=>tag !== deletedTag)

    setTags(tagsWithoutDeletedOne)
  }

  async function handleCreateNewMovieNote(){
    if(title.trim().length === 0 || note.trim().length === 0 || description.trim().length === 0 || tags.length === 0){
      return alert("Preciso que você complete todos os campos antes de avançar!")
    }

    try{
      const movieNote = {
        title,
        description,
        rating: Number(note),
        tags
      }
  
      await api.post("/movie-notes", movieNote)
      navigate(-1)
    }catch(error){
      console.log(error)
      alert("Houve um erro ao criar sua nota, tente novamente")
    }
  }

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
          onChange={e=>setNote(e.target.value)}
          
        />
        <Input 
          label={"titulo"}
          placeholder={"Título"}
          type="text"
          onChange={e=>setTitle(e.target.value)}
        />
        <Textarea 
          placeholder="Observações"
          onChange={e=>setDescription(e.target.value)}
        />
        <div>
          <h2>Marcadores</h2>
          <div>
            {
              tags.map(tag=>{
                return <Markers value={tag} onTap={()=>handleRemoveTag(tag)}/>
              })
            }
            <Markers newMarker placeholder="Novo marcador" value={newTag} onChange={e=>setNewTag(e.target.value)} onTap={handleAddTag}/>
          </div>
        </div>
        <Button title={"Excluir filme"} dark onClick={()=>navigate(-1)}/>
        <Button title={"Salvar alterações"} onClick={handleCreateNewMovieNote}/>
      </NewMovieMain>
    </NewMovieLayout>
  )
}