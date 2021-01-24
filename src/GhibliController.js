import axios from 'axios'

const base_url = 'https://ghibliapi.herokuapp.com/'

export const getFilms = async (setFilms, setLoaded) => {
    try {
        const films = await axios.get(base_url+'films')
        setFilms(films.data)
        console.log(films.data)
        setLoaded(true)
    } catch (error) {
        return false
    }
}