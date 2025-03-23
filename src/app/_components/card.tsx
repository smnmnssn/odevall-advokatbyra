"use client"
import { Separator } from "@/components/ui/separator"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function KitchenSinkExample() {
  
  return (
    <Card className='bg-transparent border-0 '>
      <Card.Img variant="top" src="/assets/lawyerNoBg.svg" className='h-[350px]' />
      <Separator className='bg-black w-full mx-auto' />
      <Card.Body className=''> 
        <Card.Title>Jan Göranson</Card.Title>
        <Card.Text>
          Advokat sedan 1989. <br/>
Verksam vid Odevall Advokatbyrå AB sedan år 1990        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush ">
        <ListGroup.Item className='bg-transparent'>Affärsjuridik</ListGroup.Item>
        <ListGroup.Item className='bg-transparent'>Bolags- och skatterätt</ListGroup.Item>
        <ListGroup.Item className='bg-transparent'>Hyres- och fastighetsrätt</ListGroup.Item>
      </ListGroup>
      <Card.Body className=''>
        <Card.Link href="#" >ohlsson@odevall-law.se</Card.Link>
      </Card.Body>
    </Card>
  );
}