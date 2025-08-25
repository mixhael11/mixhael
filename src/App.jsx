import {useState} from 'react'
import { Navbar, Nav, Container, NavDropdown  } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import Resume from './pages/Resume';
import YelpReviewClassifier from './pages/YelpReviewClassifier';
import AuctionSystem from './pages/AuctionSystem';
import WikipediaStream from './pages/WikipediaStreams';
import LibrarySystem from './pages/LibrarySystem';
import TwitterDataMine from './pages/Twitterdatamine';

export default function App() {
  const [count, setCount] = useState(0)

  return (   
      <Router basename="/mixhael">
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
  <Container fluid>
    <Navbar.Brand as={Link} to="/">Michael Angelo Masangkay</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Projects</Nav.Link>
        <Nav.Link as={Link} to="/Info">Info</Nav.Link>
        

       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container style ={{marginTop: '80px'}}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Info" element={<Resume />} />
    <Route path="/YelpReviewClassifier" element={<YelpReviewClassifier />} />
    <Route path="/Auction" element={<AuctionSystem />} />
    <Route path="/WikipediaStream" element={<WikipediaStream />} />
    <Route path="/LibrarySystem" element={<LibrarySystem />} />
    <Route path="/TwitterDataMine" element={<TwitterDataMine />} />
  </Routes>
</Container>
</Router>


      
  )
}

