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
      <div style={{
        'padding':'5px 20px',
        'backgroundColor' :'#EBFFFF'
        }}>
        {loaded?
        <>
          <FilmList films= {films} />
        </>:
        <p>"This is loading"</p>}
      </div>
  )
}

export default App
