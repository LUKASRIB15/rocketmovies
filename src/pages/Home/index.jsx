import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MovieNote } from "../../components/MovieNote";
import { HomeLayout, HomeMain } from "./styles";
import { Link } from "react-router-dom";

export function Home(){
  return (
    <HomeLayout>
      <Header/>
      <section>
        <h1>Meus filmes</h1>
        <Link to={'/new'}>
          <Button title={"Adicionar filme"} icon={FiPlus} />
        </Link>
      </section>
      <HomeMain>
        <MovieNote data={{
          title: "Interestellar",
          rating: 4
        }}/>
        <MovieNote data={{
          title: "Interestellar",
          rating: 4
        }}/>
        <MovieNote data={{
          title: "Interestellar",
          rating: 4
        }}/>
        <MovieNote data={{
          title: "Interestellar",
          rating: 4
        }}/>
      </HomeMain>

    </HomeLayout>
  )
}