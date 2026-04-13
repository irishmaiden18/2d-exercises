import Movie from "./Movie"

const MovieList = ({movies, removeFunction}) => {

  return (
    <>
      <ol>
        {movies.map((movie) => (
            <li><Movie key={movie.id} movie={movie} removeFunction={() => removeFunction(movie.id)}/></li>
        ))}
      </ol>
    </>
  )
}

export default MovieList