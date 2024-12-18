import React from 'react'
import "./BlogSection.css"
import { Col, Container, Row } from 'react-bootstrap'
import PromotionImage from '../assets/promotion/pro.png'

const BlogSection = () => {
  return (
    <div>
      <section className='promotion_section py-5'>
        <Container className='py-5'>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                    <img src={PromotionImage} className='img-fluid' alt="Promotion" />
                </Col>
                <Col lg={6} className='px-5'>
                    <h2 className='font-48 mb-5'>Nothing brings people together like a good burger</h2>
                    <p>Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida</p>
                    <ul className='ps-4'>
                        <li>
                            <p>Fringilla risus, luctus mauris orci auctor purus euismod
                            pretium purus pretium ligula rutrum tempor sapien</p>
                        </li>
                        <li>
                            <p>Quaerat sodales sapien euismod purus blandit</p>
                        </li>
                        <li>
                            <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                            sodales sapien undo pretium a purus mauris</p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>

      </section>
        <div className='bg_parallex_scroll'></div>
    </div>
  )
}

export default BlogSection
