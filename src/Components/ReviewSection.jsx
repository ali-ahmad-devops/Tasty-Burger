import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import User1 from "../assets/blog/review-author-1.jpg"
import User2 from "../assets/blog/review-author-2.jpg"
import User3 from "../assets/blog/review-author-3.jpg"
import User5 from "../assets/blog/review-author-5.jpg"
import './ReviewSection.css'

const ReviewSection = () => {
  return (
    <section className='review_section'>
      <Container>
        <Row className='overflow-x-hidden py-5'>
            <Col lg={{span:12}}>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <div className='user_img'>
                                <img src={User1} alt="user-1" className='img-fluid' />
                            </div>
                            <p className='mt-4 mb-3 px-sm-5 mx-sm-5'>" Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2 d-flex gap-1'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY AMELIE NEWLOVE</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <div className='user_img'>
                                <img src={User2} alt="user-1" className='img-fluid' />
                            </div>
                            <p className='mt-4 mb-3 px-sm-5 mx-sm-5'>" Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2 d-flex gap-1'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY AMELIE NEWLOVE</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <div className='user_img'>
                                <img src={User3} alt="user-1" className='img-fluid' />
                            </div>
                            <p className='mt-4 mb-3 px-sm-5 mx-sm-5'>" Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2 d-flex gap-1'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY AMELIE NEWLOVE</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <div className='user_img'>
                                <img src={User5} alt="user-1" className='img-fluid' />
                            </div>
                            <p className='mt-4 mb-3 px-sm-5 mx-sm-5'>" Etiam sapien sem at sagittis congue augue massa varius
                            sodales sapien undo tempus dolor egestas magna suscipit magna
                            tempus aliquet porta sodales augue suscipit luctus neque "</p>
                            <div className='item_rating mb-2 d-flex gap-1'>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY AMELIE NEWLOVE</h5>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ReviewSection
