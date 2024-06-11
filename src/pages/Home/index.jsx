import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { HomeLayout, HomeMain } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../libs/api";

export function Home(){
  const [movieNotes, setMovieNotes] = useState([])
  const [search, setSearch] = useState("")

  async function fetchMovieNotes(){
    const response = await api.get(`/movie-notes?title=${search}`)

    setMovieNotes(response.data)
  }

  useEffect(()=>{
    fetchMovieNotes()
  },[search])

  return (
    <HomeLayout>
      <Header search={search} updateSearch={setSearch}/>
      <section>
        <h1>Meus filmes</h1>
        <Link to={'/new'}>
          <Button title={"Adicionar filme"} icon={FiPlus} />
        </Link>
      </section>
      <HomeMain>
        {
          movieNotes.map(movieNote=>{
            return (
              <Link to={`details/${movieNote.id}`} key={movieNote.id}>
                <MovieNote data={{
                  title: movieNote.title,
                  rating: movieNote.rating,
                  description: movieNote.description,
                  tags: movieNote.tags
                }}/>
              </Link>
            )
          })
        }
      </HomeMain>

    </HomeLayout>
  )
}