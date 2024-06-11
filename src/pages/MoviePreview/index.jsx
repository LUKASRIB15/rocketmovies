import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../../components/Header";
import { MoviePreviewLayout, MoviePreviewMain, WrapperInRow } from "./styles";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../libs/api";
import dayjs from "dayjs";

import AvatarPlaceholderSvg from "../../assets/avatar-placeholder.svg"
import { useAuth } from "../../hooks/useAuth";

export function MoviePreview(){
  const params = useParams()
  const [movieData, setMovieData] = useState({})
  const {user} = useAuth()

  const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholderSvg

  console.log(movieData)

  useEffect(()=>{
    async function fetchMovieData(){
      const response = await api.get(`/movie-notes/my-note/${params.id}`)

      setMovieData(response.data)
    }

    fetchMovieData()
    
  },[])

  return (
    <MoviePreviewLayout>
      <Header />
      <MoviePreviewMain>
        <div>
          <WrapperInRow gap={0.8}>
            <FiArrowLeft size={16}/>
            <Link to="/">Voltar</Link>
          </WrapperInRow>
          <WrapperInRow gap={2}>
            <h1>{movieData.title}</h1>
            <Stars rating={movieData.rating}/>
          </WrapperInRow>
          <WrapperInRow gap={0.8}>
            <div>
              <img 
                src={avatar}
                alt="Imagem de perfil do usuário Lucas Ribeiro"
              />
              <p>Por {user.name}</p>
            </div>
            <div>
              <FiClock size={16}/>
              <p>{dayjs(movieData.created_at).format('DD/MM/YYYY [às] HH:mm')}</p>
            </div>
          </WrapperInRow>
        </div>
        <WrapperInRow gap={0.8}>
          {
            movieData.tags && movieData.tags.map(tag=>{
              return <Tag key={tag.id} title={tag.name}/>
            })
          }
        </WrapperInRow>
        <p>
        {movieData.description}

        </p>
      </MoviePreviewMain>
    </MoviePreviewLayout>
  )
}