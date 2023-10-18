import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'


const Player = () => {
    return (
    <div className='vart'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../public/images/haaland.jpg" />
            <Card.Body>
            <Card.Title>Erling Haaland</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Number: 9</ListGroup.Item>
            <ListGroup.Item>Nationality: Norway</ListGroup.Item>
            <ListGroup.Item>Age: 23</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../public/images/messi.jfif" />
            <Card.Body>
            <Card.Title>Lionel Messi</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Number: 10</ListGroup.Item>
            <ListGroup.Item>Nationality: Argentina</ListGroup.Item>
            <ListGroup.Item>Age: 36</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="..\public\images/kevin.webp" />
            <Card.Body>
            <Card.Title>Kevin De Bryne</Card.Title>
            <ListGroup variant="flush">
            <ListGroup.Item>Number: 11</ListGroup.Item>
            <ListGroup.Item>Nationality: Belgium</ListGroup.Item>
            <ListGroup.Item>Age: 32</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
       
    </div>

    )
}

export default Player
