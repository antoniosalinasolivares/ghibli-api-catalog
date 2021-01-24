import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import React, {useState, useEffect }from 'react'
import { getFilms } from './GhibliController'
import { FilmList } from './FilmList'
import { Splashscreen } from './Splashscreen'
function App() {

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
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar>
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
