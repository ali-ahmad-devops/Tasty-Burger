import React, { useEffect, useState } from 'react'
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import Logo from '../../assets/logo/logo.png' 
import "./Header.css"

const Header = () => {
  const [nav, setNav] = useState(false)

  
  useEffect(()=>{
    const onScrollChange = () => {
      // const scrollValue = document?.documentElement?.scrollTop
      const scrollValue = window.scrollY
      scrollValue > 100 ? setNav(true) : setNav(false)
    }
    
    window.addEventListener("scroll", onScrollChange)
    
    return () => {
      window.removeEventListener("scroll", onScrollChange)
    }
  }, [])
  
  return (
    <header>
    <Navbar collapseOnSelect className={`${nav === true ? "navbar_sticky" : "navbar"}`} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='logo'>
            <img src={Logo} alt="Logo" className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
              <div className='cart'>
                <i className="bi bi-bag fs-5"></i>
                <em className='roundpoint'>2</em>
              </div>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
