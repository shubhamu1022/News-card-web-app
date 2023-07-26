import { Typography } from '@material-ui/core';
import { Navbar,Nav, } from 'react-bootstrap';
const NavBar = () => {
  
     return (  
       
<Navbar className="navbar-color" id="basic-navbar-nav" expand="lg" variant="light" position="sticky">
   <Navbar.Brand href="/"><Typography className="nav_brand_typo">WHAT's NEWs?
   <img src="https://i.ibb.co/pKNCJYD/news-newspaper-paper-png-icon-free-download-175857.png" alt="" style={{maxHeight:'100px'}}/></Typography>
   </Navbar.Brand>
    
     <Nav className="ms-auto">
         <div className="nav_link_typo" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav" >
         
           <Nav.Link href="/"><Typography className="nav_link_typo">Home </Typography></Nav.Link>
           <Nav.Link href="/about"><Typography className="nav_link_typo">About</Typography></Nav.Link>
          </Navbar.Collapse>
          </div>
      </Nav>
</Navbar>


    );
}
 
export default NavBar;