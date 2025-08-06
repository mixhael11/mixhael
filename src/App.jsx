import {useState} from 'react'
import { Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function App() {
  const [count, setCount] = useState(0)

  return (   
      <Router>
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#home">Michael Angelo Masangkay</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>

       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container style ={{marginTop: '80px'}}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
</Container>
</Router>


      
  )
}

