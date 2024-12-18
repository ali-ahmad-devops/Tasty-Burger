import React from 'react'
import "./OrderSection.css"
import { Col, Container, Row } from 'react-bootstrap'
import { stockMockData } from '../assets/Mockdata'
import CardDemo from './CardDemo'
import { Link } from 'react-router-dom'
import burgerFall from "../assets/falling-burger2.mp4"


const OrderSection = () => {

    const renderRatingIcons = (rating) =>{
        const stars=[]

        for (let i = 0; i < 5; i++) {
            if(rating > 0.5){
                stars.push(<i key={i} className='bi bi-star-fill'></i>)
                rating--
            }else if(rating > 0 && rating < 1){
                stars.push(<i key={i} className='bi bi-star-half'></i>)
                rating--
            }else{
                stars.push(<i  key={`empty${i}`} className='bi bi-star'></i>)
            }
        }
        return stars;
    }

  return (
    <section className='menu_section py-5 position-relative'>
        <video autoPlay className='img-fluid falling-burger' loop muted   src={burgerFall} type="video/mp4"></video>
      <Container>
        <Row className='w-100 mx-0 py-5'>
            <Col lg={{span:8, offset:2}} className='text-center mb-4'>
                <h2 className='font-48'>OUR CRAZY BURGERS</h2>
                <p className='para font-18 pt-4 pb-4 pb-lg-5'>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus</p>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            {stockMockData.map((item,i)=>{
                return <CardDemo key={i} image={item.image} rating={item.rating} title={item.title} paragraph={item.paragraph} price={item.price} renderRatingIcons={renderRatingIcons}/>
            })}
        </Row>

        <Row className='pt-5'>
            <Col md={6} lg={5} className='mb-4 mb-md-0'>
                <div className='ads_box ads_img1'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5 >CHEESE FRIES</h5>
                    <Link to="/" className="btn btn_red rounded-0 px-3 px-lg-4">
                        Learn More
                    </Link>
                </div>
            </Col>
            <Col md={6} lg={7}>
                <div className='ads_box ads_img2'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5 >CHEESE FRIES</h5>
                    <Link to="/" className="btn btn_red rounded-0 px-3 px-lg-4">
                        Learn More
                    </Link>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OrderSection
