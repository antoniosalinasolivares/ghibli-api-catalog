import 'bootstrap/dist/css/bootstrap.min.css'
import { getPictureSrc } from './OMDbController'
import { Card, Modal, Button } from 'react-bootstrap'
import React, { useState, useEffect, useContext } from 'react'
import {UserContext} from './UserContext'
export const Film = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [imgSrc, setImgSrc] = useState('');
    useEffect(()=>{
        const a = async ()=> {
            const source = await getPictureSrc(props.title)
            setImgSrc(source)
        }
        a()
    },[])

    return (
            <div className="col-md-4" styles={{
                'margin':'10px 0px 10px 0px'
            }}>
                <Card key={props.id} >
                    <Card.Img src={imgSrc} />
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Button variant="primary" onClick={() => setShowModal(true)}>
                            Show description
                        </Button>
                        <VerticallyCenteredModal
                            film={{
                                title:props.title,
                                description:props.description,
                                id:props.id
                            }}
                            show={showModal}
                            onHide={() => setShowModal(false)}
                        />
                    </Card.Body>
                </Card>
            </div>
    )
}


function VerticallyCenteredModal(props) {
  const {favs, setFavs} = useContext(UserContext)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.film.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.film.description }
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
          setFavs((currentFavs)=>{
            return [...currentFavs, props.film]
          })
        }}>Add to favourites</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}