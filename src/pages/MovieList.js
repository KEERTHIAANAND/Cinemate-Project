import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
export const MovieList = ({apiPath}) => {
  const {data: movies} = useFetch(apiPath);


  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          { movies.map((movies)=>(
            <Card key={movies.id} movie= {movies}/>
          ))}
        </div>
      </section>
    </main>
  )
}
