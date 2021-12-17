import React, { Component } from 'react';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Fetch from './components/fetch';
import Addlisting from './components/addlisting';
import Relist from './components/relist';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">GalwayHousing.com</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Contact</Nav.Link>
              <Nav.Link href="/fetch">Listings</Nav.Link>
              <Nav.Link href="/addlisting">Add Listing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact><Content /></Route>
          <Route path="/addlisting"><Addlisting></Addlisting></Route>
          <Route path="/fetch"><Fetch></Fetch></Route>
          <Route path="/relist/:id"> <Relist></Relist></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
