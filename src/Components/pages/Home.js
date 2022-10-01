import React from 'react'
import Main from '../Main'
import DisplayMovie from '../Movies/displayMovie'
import MoviePlace from '../Movies/MoviesStorage'


const Home = () => {
  return (
    <div>
      <Main/>
      <DisplayMovie/>
       <MoviePlace/>
    </div>
  )
}

export default Home
