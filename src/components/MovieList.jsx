import Movie from "./Movie"

const MovieList = ({movies, removeFunction, addFunction, clearFunction}) => {

  return (
    <>
      <button onClick={clearFunction}>Clear List</button>
      <button onClick={addFunction}>Add</button>
      <ol>
        {movies.map((movie) => (
            <li><Movie key={movie.id} movie={movie} removeFunction={() => removeFunction(movie.id)}/></li>
        ))}
      </ol>
    </>
  )
}

export default MovieList