import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import React, {useState, useEffect }from 'react'
import { getFilms } from './GhibliController'
import { FilmList } from './FilmList'
import { Splashscreen } from './Splashscreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {UserContext} from './UserContext'
import useLocalStorage from './useLocalStorage'


const App = () => {
  const [favs, setFavs] = useLocalStorage("films", [])
  return(
    <Router>
      <UserContext.Provider value={{favs, setFavs}}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Ghibli Movie Catalog</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="https://ghibliapi.herokuapp.com/">Your Favourite Films</Nav.Link>
            <Nav.Link href="https://ghibliapi.herokuapp.com/">Ghibli API</Nav.Link>
            <Nav.Link href="https://www.omdbapi.com/">OMDb API</Nav.Link>
            <Nav.Link href="https://github.com/antoniosalinasolivares/ghibli-api-catalog">Source</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/chat' component={Home} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}


export const Home = () => {

  const [loaded, setLoaded] = useState(false);
  const [films, setFilms] = useState([])


  useEffect(()=>{
    setTimeout(()=>{
      getFilms(setFilms, setLoaded)

    }, 3000)
  }, [])

  return (
    
      <div>
        {loaded?
        <>
            <div style={{
                'padding':'10px 10px 10px 10px',
            }}>
              <FilmList style={{
              }} films= {films} />
            </div>     
        </>:
        <Splashscreen/>}
      </div>
  )
}



export default App
