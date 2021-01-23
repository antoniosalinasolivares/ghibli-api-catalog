import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect }from 'react'
import { getFilms } from './GhibliController'
import { FilmList } from './FilmList'

function App() {

  const [loaded, setLoaded] = useState(false);
  const [films, setFilms] = useState([])

  useEffect(()=>{
    getFilms(setFilms, setLoaded)
  }, [])

  return (
    <>
      {loaded?
      <FilmList films= {films} />:
      <p>"This is loading"</p>}
    </>
  )
}

export default App
