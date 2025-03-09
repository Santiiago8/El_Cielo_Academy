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
                    <p>Maadi The Field</p>
                    <p>+201128239365 +201055319942</p>
                    <p>New Cairo O1 Brass Monkeys +201030279302</p>
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
                        <a href="https://www.facebook.com/profile.php?id=100072068926217" target='_blank'>Facebook</a>
                        <a href="" target='_blank'>TikTok</a>
                        <a href="https://www.instagram.com/el_cielo_academy/" target='_blank'>Instagram</a>
                        <a href="https://www.youtube.com/@ElCieloAcademy" target='_blank'>YouTube</a>
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
