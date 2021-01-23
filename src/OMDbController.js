import axios from 'axios'


const base_url = 'https://www.omdbapi.com/?apikey=25cb10d2&t='

export const getPictureSrc = async (movie_name) => {
    try {
        const film = await axios.get(base_url+movie_name.split(' ').join('+'))
        return film.data.Poster
    } catch (error) {
        return false
    }
}

