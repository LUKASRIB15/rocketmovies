import { Link } from "react-router-dom";
import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { MovieNoteLayout } from "./styles";

export function MovieNote({data}){
  return (
      <MovieNoteLayout>
        <h2>{data.title}</h2>
        <Stars rating={data.rating}/>
        <p>
          {data.description}

          </p>
          <footer>
            {
              data.tags.map(tag=>{
                return <Tag key={tag.id} title={tag.name}/>
              })
            }
          </footer>
      </MovieNoteLayout>

  )
}