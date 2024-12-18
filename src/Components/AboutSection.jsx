import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {aboutMockData } from "../assets/Mockdata"
import "./AboutSection.css"

const AboutSection = () => {

    // const burgerVideo = window.onload()

  return (
    <>
        <section className='about_section'>
        <Container className=''>
            <Row className='w-100 mx-0'>
                <Col lg={{span:8, offset : 2}} className='text-center'>
                    <h2 className='mb-3 font-48'>The burger tastes better when you eat it with your family</h2>
                    <p className='mb-4 mb-lg-5 font-18'>Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                    auctor an tempus feugiat dolor lacinia cubilia curae integer
                    orci congue and metus integer primis in integer metus</p>
                    <Link to="/" className='btn order_now btn_red'>
                        Explore Full Menu
                    </Link>
                </Col>
            </Row>
        </Container>
        </section>
        <section className='about_wrapper py-5'>
            <Container>
                <Row className='justify-content-center'>
                    {aboutMockData.map((item, i)=>{
                        return <Col md={6} lg={4} key={i} className='my-3'>
                            <div className='about_box text-center'>
                                <div className='about_icon'>
                                    <img src={item.image} alt="icon" className='img-fluid' />
                                </div>
                                <h4 className='my-4'>{item.title}</h4>
                                <p>{item.paragraph}</p>
                            </div>
                        </Col>
                    })}
                </Row>
            </Container>
        </section>
    </>
  )
}

export default AboutSection
