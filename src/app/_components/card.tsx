"use client"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function KitchenSinkExample() {
  
  return (
    <Card>
      <Card.Img variant="top" src="/assets/lawyerNoBg.svg" className='h-[350px]' />
      <Card.Body>
        <Card.Title>Jan Göranson</Card.Title>
        <Card.Text>
          Advokat sedan 1989. <br/>
Verksam vid Odevall Advokatbyrå AB sedan år 1990        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Affärsjuridik</ListGroup.Item>
        <ListGroup.Item>Bolags- och skatterätt</ListGroup.Item>
        <ListGroup.Item>Hyres- och fastighetsrätt</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">ohlsson@odevall-law.se</Card.Link>
      </Card.Body>
    </Card>
  );
}