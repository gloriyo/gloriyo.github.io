import { Container, Navbar, Nav } from "react-bootstrap";
import "../styles/nav.css";

function TopNav() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto" activeKey="/home">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#cv">Skills</Nav.Link>
            <Nav.Link href="#section-projects">Projects</Nav.Link>
            <Nav.Link href="game">Play</Nav.Link>
            <Nav.Link className="nav-disabled" disabled>
              TBA
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
