import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from '../../assets/logo/logo.png' 
import "./Footer.css"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <Container>
        <Row className='pt-5'>
          <Col md={6} lg={3} className="my-4">
            <img src={Logo} alt="footer-logo" className='img-fluid footer_logo' />
          </Col>
          <Col md={6} lg={3} className="my-4">
            <div>
              <h5 className="mb-3">Sections</h5>
              <ul className="footer_list">
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/"> Menu</Link></li>
                <li><Link to="/"> Blogs</Link></li>
                <li><Link to="/"> Contact us</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={6} lg={3} className="my-4">
            <div>
              <h5 className="mb-3">Contact Us</h5>
              <ul className="footer_list">
                <li><Link to="/"> +92 322 415 9287</Link></li>
                <li><Link to="/"> test@gmail.com</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={6} lg={3} className="my-4">
            <div>
              <h5 className="mb-3">Secial Media</h5>
              <ul className="footer_list d-flex gap-3 flex-wrap">
                <li><Link to="/"><i className='bi bi-whatsapp'></i></Link></li>
                <li><Link to="/"><i className='bi bi-instagram'></i></Link></li>
                <li><Link to="/"><i className='bi bi-facebook'></i></Link></li>
                <li><Link to="/"><i className='bi bi-twitter'></i></Link></li>
              </ul>              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
