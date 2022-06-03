import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight:'2rem'}} />
                    <div>
                        <p>123 New york.</p>
                        <h4>Los Angles, US</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight:'2rem'}}/>213-800-9900</h4>
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight:'2rem'}}/>galaxy@email.com</h4>
                </div>
            </div>
        <div className='right'>
            <h4>About</h4>
            <p>This is a demo page of galaxy,
                Enjoy the Experience and don't forget
                to launch the account.
            </p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight:'1rem'}}/>
                <FaLinkedin size={30} style={{color: '#ffffff', marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color: '#ffffff', marginRight:'1rem'}}/>
            </div>
        </div>

        </div>
    </div>
  )

}

export default Footer