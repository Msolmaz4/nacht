import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'

const NavBar=()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Favorites</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
            </Navbar.Collapse>
         </Navbar.Collapse>
       
        </Container>
      </Navbar>  
    )
}
export default NavBar;