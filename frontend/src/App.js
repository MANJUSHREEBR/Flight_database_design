import React, { Component } from 'react';
import {
  Row, Col, Image, ListGroup, Card, Button, Form, Modal, Jumbotron, Container,
} from 'react-bootstrap';
import background from './background.jpeg'; 


function App() {

  return (
    
    <div className="App">
      <header className="App-header">
      <Jumbotron style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '300px', backgroundPosition: 'center'}}>
            <h1 style={{ color: 'white' }}>
              {' '}
             Cassandra Flight Booking
            </h1>
            <p style={{ color: 'white' }}>
              •
              Find cheap flights
              •
            </p>
            <p>
            </p>
          </Jumbotron>


      </header>
      <Container>
      <Row>
            <Col sm={5} md={4} lg={2}>
              </Col>
            <Col>
              <ListGroup>
                <h1>
              Expert Flight Search
            </h1>
              </ListGroup>
              <hr></hr>
              <input type="radio" value="oneway" name="genbookingtypeder" /> One way
              <input type="radio" value="round" name="bookingtype" /> Round Trip
              <hr></hr>
          
          <div className="form">
      
      <form>
      <div className="form-group">
        <Row>
       <Col>
        <label className="text-muted">From:</label>
        <input  type="text" className="form-control" placeholder="Leaving from" />
        </Col>
        <Col>
        <label className="text-muted">Departure Date:</label>
        <input  type="date" className="form-control"/>
        </Col>

        </Row><hr></hr>
        <Row>
       <Col>
        <label className="text-muted">To:</label>
        <input  type="text" className="form-control" placeholder="Going to" />
        </Col>
        <Col>
        <label className="text-muted">Arrival Date:</label>
        <input  type="date" className="form-control"/>
        </Col>
        </Row>
       
      </div>
      <div className="form-group">
        <label className="text-muted">Carrier</label>
        <input  type="text" className="form-control"/>
    </div>
        <Button type="submit" value="Search" variant="info">
          Serach
        </Button>
        
    </form>
    
      </div>
            </Col>
      </Row>
      </Container>
     
    
    
    </div>
    
  );
}

 export default App;