import React from 'react'
import "./Home.css"
import Layout from '../../Components/Layouts/Layout'
import Hero from '../../Components/Hero'
import AboutSection from '../../Components/AboutSection'
import OrderSection from '../../Components/OrderSection'
import BlogSection from '../../Components/BlogSection'
import ShopSection from '../../Components/ShopSection'
import ReviewSection from '../../Components/ReviewSection'

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <AboutSection/>
      <OrderSection/>
      <BlogSection/>
      <ShopSection/>
      <ReviewSection/> 
    </Layout>
  )
}

export default Home
