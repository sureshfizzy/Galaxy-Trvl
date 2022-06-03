import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import PricingCards from '../components/Pricing'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading='PRICING.' text='Choose your trip.'/>
        <PricingCards />
        <Footer/>
    </div>
  )
}

export default Pricing