import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./CardDemo.css"

const CardDemo = ({image, rating, title, paragraph, price, renderRatingIcons}) => {
  return (
    <Col sm={6} lg="4" xl="3" className='mb-4 col-9'>
        <Card className='overflow-hidden orderCards'>
            <div className='overflow-hidden'>
                <Card.Img variant="top" src={image} />
            </div>
            <Card.Body>

                <div className='d-flex align-items-center justify-content-between'>
                    <div className='item_rating'>{renderRatingIcons(rating)}</div>
                    <div className='wishlist'>
                        <i className="bi bi-heart"></i>
                    </div>
                </div>

                <Card.Title className='pt-3'>{title}</Card.Title>
                <Card.Text>
                {paragraph}
                </Card.Text>

                <div className='d-flex align-items-center justify-content-between'>
                    <div className='menu_price py-2 px-3'>
                        <h5 className='mb-0'>${price }</h5>
                    </div>
                    <div className='add_to_cart'>
                        <Link to="/" className='px-4 py-3'>
                            <i className='bi bi-bag me-2'></i>
                            Add to Cart
                        </Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default CardDemo
