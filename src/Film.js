import 'bootstrap/dist/css/bootstrap.min.css'
import { getPictureSrc } from './OMDbController'
import { Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'


export const Film = (props) => {


    const [imgSrc, setImgSrc] = useState('');
    useEffect(()=>{
        const a = async ()=> {
            const source = await getPictureSrc(props.title)
            setImgSrc(source)
        }
        a()
    },[])

    return (
        
            <Card key={props.id}>
                <Card.Img src={imgSrc}/>
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}
