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

export const getPeople = async (setCollection, setLoaded) => {
    try {
        const people = await axios.get(base_url+'people')
        console.log(people.data)
    } catch (error) {
        return false
    }
}

export const getLocation = async (setCollection, setLoaded) => {
    try {
        const locations = await axios.get(base_url+'locations')
        console.log(locations.data)
    } catch (error) {
        return false
    }
}

export const getSpecies = async (setCollection, setLoaded) => {
    try {
        const species = await axios.get(base_url+'species')
        console.log(species.data)
    } catch (error) {
        return false
    }
}

export const getVehicles = async (setCollection, setLoaded) => {
    try {
        const vehicles = await axios.get(base_url+'vehicles')
        console.log(vehicles.data)
    } catch (error) {
        return false
    }
}