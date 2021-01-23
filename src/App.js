import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card } from 'react-bootstrap'
import React, {useState, useEffect }from 'react'
import {getFilms} from './GhibliController'

function App() {

  const [loaded, setLoaded] = useState(false);
  const [films, setFilms] = useState([])

  useEffect(()=>{
    getFilms(setFilms, setLoaded)
  }, [])

  return (
    <>
      {loaded?
      <p>{JSON.stringify(films)}</p>:
      <p>"This is loading"</p>}
    </>
  )
}

export default App
