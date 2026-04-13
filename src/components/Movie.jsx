
const Movie = ({movie, removeFunction}) => {



  return (
    <>
        <h4>{movie.title}</h4>
        <p><i>Rating:</i> {movie.rating}</p>
        <button onClick={removeFunction}>Remove</button>
    </>
  )
}

export default Movie