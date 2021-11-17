import React, { Component, useState } from 'react';
import {
  Row, Col, Image, ListGroup, Card, Button, Form, Modal, Jumbotron, Container,
} from 'react-bootstrap';
import background from './background.jpeg'; 



function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [DepartureDate, setDepartureDate] = useState("");
  const [Carrier, setCarrier] = useState("");
  const [flights, setFlights] = useState([]);

  const getFlightData = (event) => {
    event.preventDefault();
    let week = DepartureDate.split('-')[1];
    let month = DepartureDate.split('-')[2];
    // alert(week + " " + month);
    if(week[0] === '0'){
      week = week.substring(1, week.length);
    }
    if(month[0] === '0'){
      month = month.substring(1, month.length);
    }
    // alert(week + " " + month);
    fetch(`http://localhost:5000/api/flights?carrier=${Carrier}&dayofmonth=${month}&dayofweek=${week}&origin_city=${origin}&destination_city=${destination}`)
      .then(res => res.json())
      .then(
        (result) => {
          setFlights(result._rs.rows);
          console.log(result._rs.rows);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )

  }
 

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
              Plan your vacation with cheap flights
              •
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
              {' '}
              <input type="radio" value="round" name="bookingtype" /> Round Trip
              <hr></hr>
          
          <div className="form">
      
      <form>
      <div className="form-group">
        <Row>
       <Col>
        <label className="text-muted">From:</label>
        <input  type="text" onChange={(event)=>setOrigin(event.target.value)} className="form-control" placeholder="Leaving from" value={origin}/>
        </Col>
        <Col>
        <label className="text-muted" >Departure Date:</label>
        <input  type="date" onChange={(event)=>setDepartureDate(event.target.value)}  className="form-control" value={DepartureDate}/>
        </Col>

        </Row><hr></hr>
        <Row>
       <Col>
        <label className="text-muted">To:</label>
        <input  type="text" onChange={(event)=>setDestination(event.target.value)} className="form-control" placeholder="Going to" value={destination}/>
        </Col>
        <Col>
        <label className="text-muted">Arrival Date:</label>
        <input  type="date" className="form-control"/>
        </Col>
        </Row>
       
      </div>
      <div className="form-group">
        <label className="text-muted">Carrier</label>
        <input  type="text" onChange={(event)=>setCarrier(event.target.value)} className="form-control" placeholder="Enter Carrier"value={Carrier}/>
    </div>
        <Button type="submit" value="Search" variant="info" onClick={(event)=>getFlightData(event)}>
          Serach
        </Button>
        
    </form>
    
      </div>
            </Col>
      </Row>
      </Container>
               <Container>
               {flights && flights.map((flight, i) => (
                 <Row>
                   <Col sm={5} md={4} lg={12}>
                 <Card className="my-3 p-3 rounded">

           <Card.Body style={{ fontFamily: 'initial' }}>
             <Card.Title as="div">

               <strong>
                 {' '}
                 Carrier: {flight.carrier}
                 {' '}
               </strong>
               {' '}

             </Card.Title>
             <Card.Text as="div">
             <ListGroup>
             Departure Date: {flight.dayofmonth}/{flight.dayofweek}/2021
             </ListGroup>
             <ListGroup>
             Origin city: {flight.origin_city}
             </ListGroup>
             <ListGroup>
             Destination city: {flight.destination_city}
             </ListGroup>
             
             </Card.Text>
           <hr></hr>
             <Button type="submit" value="Search" variant="success">
          Book Flight
        </Button>
           </Card.Body>
         </Card>
         </Col>
                 </Row>
             
                   ))}
                      

                  </Container>
     
    
    
    </div>
    
  );
}

 export default App;