import React from 'react'
import '../styles/Footer.css'
import logo2 from '../assets/img/El-Cielo-Academy-logo2.png'

export const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-section logo2-section'>
                    <img src={logo2} alt="El Cielo Academy Logo 2" className='logo2-pic' />
                </div>
                <div className='footer-section'>
                    <h4>Contact Us</h4>
                    <p>Elcieloacademy21@gmail.com </p>
                    <p>+201128239365</p>
                    <p>Maadi as Sarayat Al Gharbeyah, Victoria Sq (Intersection Rd 216 & Rd 250).</p>
                </div>
                <div className='footer-section'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/faq&ap">FAQ & AP</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h4>Follow Us</h4>
                    <div className='social-links'>
                        <a href="" target='_blank'>Facebook</a>
                        <a href="" target='_blank'>Twitter</a>
                        <a href="" target='_blank'>Instagram</a>
                        <a href="" target='_blank'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 El Cielo Academy. All Rights Reserved.</p>
            </div>
        </footer>
    </>
  )
}
