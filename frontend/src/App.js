/* eslint-disable react/jsx-no-undef */
import React, { Component, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Landingpage from './components/Landingpage';
import Signup from './components/signup';
import Analysis from './components/analysis';
import {Container, Navbar, Nav} from 'react-bootstrap';

function App() {
  return(
    <BrowserRouter>
    <Container fluid>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">Casaandra Flight booking</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Signin</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
      <Nav.Link href="/analysis">Analytics</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <main className="py-3">
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <Route exact path="/home"  component={Home} />
          <Route exact path="/signup"  component={Signup} />
          <Route exact path="/analysis"  component={Analysis} />
        </Switch>
      </main>
    </Container>
  </BrowserRouter>
  )
}

 export default App;