// Bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Form, option} from 'react-bootstrap'

// router dependencies
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// react dependencies
import React, {useState, useEffect, useContext, useRef }from 'react'
import {UserContext} from './UserContext'
import useLocalStorage from './useLocalStorage'

// API query abstraction
import { getFilms, getPeople, getLocations, getSpecies, getVehicles } from './GhibliController'

// subcomponents
import { FilmList } from './FilmList'
import { Splashscreen } from './Splashscreen'

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
            <Nav.Link>
              <Link to={'/custom'}> Search </Link>
            </Nav.Link>
            <Nav.Link href="https://ghibliapi.herokuapp.com/">Ghibli API</Nav.Link>
            <Nav.Link href="https://www.omdbapi.com/">OMDb API</Nav.Link>
            <Nav.Link href="https://github.com/antoniosalinasolivares/ghibli-api-catalog">Source</Nav.Link>
          </Nav>
        </Navbar>
        <Switch style={{
                'padding':'10px 10px 10px 10px',
        }}>
          <Route exact path='/' component={Home} />
          <Route path='/favs' component={Favs} />
          <Route path='/custom' component={Custom} />
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
      }, 1500)
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

const Custom = () => {

  const [Collection, setCollection] = useState([])
  const [query, setQuery] = useLocalStorage('query', 'people')



  return(
    <>
      <div style={{
                'padding':'10px 10px 10px 10px',
            }}>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>People</option>
                <option>Locations</option>
                <option>Species</option>
                <option>Vehicles</option>
              </Form.Control>
            </Form.Group>
          </Form>
      </div>
    </>
  )
}

export default App
