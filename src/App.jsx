import { useState } from "react"
import LightSwitchCounter from "./components/LightSwitchCounter"
import MovieList from "./components/MovieList"
import movies from "./components/Movies"

function App() {

  const [movieList, setMovieList] = useState(movies)

  const removeMovie = (id) => {

    const results = movieList.filter((movie) => movie.id !== id)
    setMovieList(results)

    console.log(movieList)
  }

  return (
    <>
      <h1>Exercises</h1>
      <LightSwitchCounter/>
      <h2>Movie List</h2>
      <MovieList movies={movies} removeFunction={removeMovie}/>
    </>
  )
}

export default App
