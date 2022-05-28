import { Navbar, Nav, Container } from "react-bootstrap";
import './style.css'

function NavBar() {
    return (
        <div>
          <Navbar varient="dark" expand="lg" fixed="top" className="navbar" className='m-auto'>
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                    <Nav.Link hred="#viewprofile">View Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }

    export default NavBar;