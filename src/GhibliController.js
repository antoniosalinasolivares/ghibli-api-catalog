import axios from 'axios'

const base_url = 'https://ghibliapi.herokuapp.com/'

export const getFilms = async (setFilms, setLoaded) => {
    try {
        const films = await axios.get(base_url+'Films')
        setFilms(films.data)
        setLoaded(true)
    } catch (error) {
        return false
    }
}

export const getSearch = async (query , setCollection) => {
    try {
        const elements = await axios.get(base_url+query)
        setCollection(elements.data)
    } catch (error) {
        return false
    }
}