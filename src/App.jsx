import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Madison Eats</h1>
      <p>Campus food finder — proof of concept.</p>
      <Button as={Link} to="/browse">Go to Browse</Button>
    </Container>
  )
}

function Browse() {
  return (
    <Container className="py-4">
      <h2>Browse</h2>
      <p>List of restaurants coming soon.</p>
      <Button as={Link} to="/">Back Home</Button>
    </Container>
  )
}

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">Madison Eats</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  )
}
