import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'
import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero_section'>
      <Container>
        <Row className='w-100 align-items-center'>
            <Col lg={7} className=''>
                <div className='position-relative px-lg-5 '>
                    <img src={Burger} alt="Hero" className='img-fluid' />
                    <div className='price_badge'>
                        <div className='badge_text'>
                            <h4 className='h4_xs'>Only</h4>
                            <h4 className='h3_lg'>$6.99</h4>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={5}>
                <div className='hero_text text-center'>
                    <h1 className='text-white mb-4'>New Burger</h1>
                    <h2 className='text-white mb-4 mb-xl-5'>With Onions</h2>
                    <p className='text-white pt-2 pb-4'>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                    viverra tortor in iaculis pretium at magna mauris ipsum primis
                    rhoncus feugiat</p>
                    <Link to="/" className='btn order_now'>
                        Order Now
                    </Link>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
