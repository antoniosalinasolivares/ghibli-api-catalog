import {Film} from './Film'

import React from 'react'

export const FilmList = (props) => {

    return (
            (
                props.films.map((element )=> {
                    return(
                        <Film key={element.id} id={element.id} title={element.title} description={element.description} />
                    )
                })
            )
    )
}
