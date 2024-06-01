import { Container, Navbar, Nav } from "react-bootstrap";
import "../styles/nav.css";

function TopNav() {
  return (
    <Navbar
      className="fs-5 p-3"
      expand="sm"
      bg="custom-dark"
      variant="dark"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand className="fs-3" href="#">
          Gloria Yoon
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end px-2">
          <Nav className="jpx-2" activeKey="/home">
            <Nav.Link href="#cv">Skills</Nav.Link>
            <Nav.Link href="#section-projects">Projects</Nav.Link>
            <Nav.Link className="nav-disabled">Play</Nav.Link>
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
