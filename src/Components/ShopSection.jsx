import React from 'react'
import "./ShopSection.css"
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIOS from "../assets/shop/appstore.png"
import StoreGoogle from "../assets/shop/googleplay.png"
import DownloadImage from "../assets/shop/e-shop.png"
import Brand1 from "../assets/brands/brand-11.png"
import Brand2 from "../assets/brands/brand-12.png"
import Brand3 from "../assets/brands/brand-13.png"
import Brand4 from "../assets/brands/brand-14.png"
import Brand5 from "../assets/brands/brand-15.png"
import Brand6 from "../assets/brands/brand-16.png"
import Brand7 from "../assets/brands/brand-17.png"
import Brand8 from "../assets/brands/brand-18.png"

const ShopSection = () => {
  return (
    <>
        <section className='shop_section pt-5'>
        <Container>
            <Row className='align-items-center pt-5'>
                <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                    <h4>ownload mobile App and</h4>
                    <h2>save up to 20%</h2>
                    <p className='pe-lg-4 mb-5 mt-3'>Aliquam a augue suscipit, luctus neque purus ipsum and neque
                    dolor primis libero tempus, blandit varius</p>
                    <Row className='justify-content-center justify-content-lg-start mx-auto'>
                        <Col sm={5} md={4} lg={5} className='col-6'>
                            <Link to="/">
                                <img src={StoreIOS} alt="IOS" className='img-fluid '/>
                            </Link>
                        </Col>
                        <Col sm={5} md={4} lg={5} className='col-6'>
                            <Link to="/">
                                <img src={StoreGoogle} alt="Android" className='img-fluid'/>
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className='px-5'>
                    <img src={DownloadImage} alt="e-shop" className='img-fluid' />
                </Col>
            </Row>
        </Container>
        <section className='brand_section pt-4 pb-2 pt-lg-5 pb-lg-2'>
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='brand_img'>
                            <img src={Brand1} alt="brand-1" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand2} alt="brand-2" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand3} alt="brand-3" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand4} alt="brand-4" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand5} alt="brand-5" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand6} alt="brand-6" className='img-fluid' />
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='brand_img'>
                            <img src={Brand3} alt="brand-3" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand4} alt="brand-4" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand5} alt="brand-5" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand6} alt="brand-6" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand7} alt="brand-7" className='img-fluid' />
                        </div>
                        <div className='brand_img'>
                            <img src={Brand8} alt="brand-8" className='img-fluid' />
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
        </section>
    </>
  )
}

export default ShopSection
