import React, { Component, useState, useEffect} from 'react';
import {
    Row, Col, Image, ListGroup, Card, Button, Form, Modal, Jumbotron, Container,
  } from 'react-bootstrap';
  import background from './background.jpeg'; 
  
  function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(origin && destination)
       setShow(true);
    }
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [DepartureDate, setDepartureDate] = useState("");
    const [Carrier, setCarrier] = useState("DL");
    let [flights, setFlights] = useState([]);
    
    if(flights){
        if(origin)
        flights = flights.filter((review)=> review.origin_city === origin);
        if(destination)
        flights = flights.filter((review)=> review.destination_city === destination);
    }

    const getFlightData = (event) => {
        event.preventDefault();
        //   let week = DepartureDate.split('-')[1];
        //   let month = DepartureDate.split('-')[2];
        //   // alert(week + " " + month);
        //   if(week[0] === '0'){
        //     week = week.substring(1, week.length);
        //   }
        //   if(month[0] === '0'){
        //     month = month.substring(1, month.length);
        //   }
          // alert(week + " " + month);
          fetch(`http://localhost:5000/api/${Carrier}`)
            .then(res => res.json())
            .then(
              (result) => {
                setFlights(result._rs.rows);
              },
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
        <div className="form-group">
          <label className="text-muted">Carrier</label>
          <select   onChange={(event)=>setCarrier(event.target.value)} className="form-control" placeholder="Enter Carrier" value={Carrier}>
           <option value="DL">DL</option>
           <option value="WN">WN</option>
           <option value="AA">AA</option>
            <option value="UA">UA</option>
            <option value="US">US</option>
           <option value="OO">OO</option>
           <option value="B6">B6</option>
            <option value="EV">EV</option>
            <option value="MQ">MQ</option>
           <option value="9E">9E</option>
           <option value="AS">AS</option>
            <option value="FL">FL</option>
          </select>
      </div>
          <Row>
         <Col>
          <label className="text-muted">From:</label>
          <input  type="text" onChange={(event)=>setOrigin(event.target.value)} className="form-control" placeholder="Leaving from" value={origin}/>
          </Col>
          {/* <Col>
          <label className="text-muted" >Departure Date:</label>
          <input  type="date" onChange={(event)=>setDepartureDate(event.target.value)}  className="form-control" value={DepartureDate}/>
          </Col> */}
  
          </Row><hr></hr>
          <Row>
         <Col>
          <label className="text-muted">To:</label>
          <input  type="text" onChange={(event)=>setDestination(event.target.value)} className="form-control" placeholder="Going to" value={destination}/>
          </Col>
          {/* <Col>
          <label className="text-muted">Arrival Date:</label>
          <input  type="date" className="form-control"/>
          </Col> */}
          </Row>
         
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
               <Button type="submit" value="Search" variant="success" onClick={handleShow}>
            Book Flight
          </Button>
             </Card.Body>
           </Card>
           </Col>
                   </Row>
               
                     ))}
                        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>You have successfully booked the Flight</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
                    </Container>
       
      
      
      </div>
      
    );
  }
  
   export default Home;