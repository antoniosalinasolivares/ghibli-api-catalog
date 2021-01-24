import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Button } from 'react-bootstrap'
import React, {useState, useEffect, useContext }from 'react'
import { getFilms } from './GhibliController'
import { FilmList } from './FilmList'
import { Splashscreen } from './Splashscreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {UserContext} from './UserContext'
import {Link} from 'react-router-dom'
import useLocalStorage from './useLocalStorage'

const App = () => {

  const [favs, setFavs] = useLocalStorage('films', [])
  return(
    <Router>
      <UserContext.Provider value={{favs, setFavs}}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to={'/'}> Ghibli Studio Catalog </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={'/favs'}> Favs </Link>
            </Nav.Link>
            <Nav.Link href="https://ghibliapi.herokuapp.com/">Ghibli API</Nav.Link>
            <Nav.Link href="https://www.omdbapi.com/">OMDb API</Nav.Link>
            <Nav.Link href="https://github.com/antoniosalinasolivares/ghibli-api-catalog">Source</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/favs' component={Favs} />
        </Switch>
      </UserContext.Provider>
    </Router>

  )
}


const Home = () => {

  const [loaded, setLoaded] = useState(false);
  const [beenhere, setBeenhere] = useState(false)
  const [films, setFilms] = useState([])


  useEffect(()=>{
    if(!beenhere){
      setTimeout(()=>{
        getFilms(setFilms, setLoaded)
        setBeenhere(true)
      }, 2000)
    }
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

const Favs = () => {
  const {favs, setFavs} = useContext(UserContext)
  return(
        <>
            <div style={{
                'padding':'10px 10px 10px 10px',
            }}>
              <FilmList style={{
              }} films= {favs} />
            </div>     
        </>
        )
}

export default App
