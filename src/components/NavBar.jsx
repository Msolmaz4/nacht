import React from 'react'
import { useContext } from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'
import AuthContext from '../context/AuthContex'
import Button from 'react-bootstrap/Button';

const NavBar=()=>{

 const {log,logout} = useContext(AuthContext)

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href={`./`} >logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Collapse className="justify-content-end">

            <Nav.Link  href={`/`}>Home</Nav.Link>
            <Nav.Link href={`/favori`}>Favorites</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>

            {
              log ? <>
               <Button variant="danger" onClick={logout}>Logout</Button>
               
              </>:<>
              <Nav.Link href={`/login`} >Login</Nav.Link>
              <Nav.Link href={`/register`}>Register</Nav.Link>
              </>
              
            }
           
            </Navbar.Collapse>
         </Navbar.Collapse>
       
        </Container>
      </Navbar>  
    )
}
export default NavBar;