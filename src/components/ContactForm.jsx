import React, { useState } from 'react';
import '../styles/ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <h2 className='contact-title'>Contact Us</h2>
            <div className='contact-container'>
                <div data-aos="fade-up-right">
                    <div className="contact-data-container">
                        <div className="contact-data email-container">
                            <h3>Email</h3>
                            <p><FontAwesomeIcon icon={faEnvelope} className='fa-icon' /> Elcieloacademy21@gmail.com</p>
                        </div>
                        <div className="contact-data phone-number">
                            <h3>Phone Number</h3>
                            <p><FontAwesomeIcon icon={faPhone} className='fa-icon' />MAADI THE FIELD +201128239365 +201055319942</p>
                            <p><FontAwesomeIcon icon={faPhone} className='fa-icon' />NEW CAIRO O1 BRASS MONKEYS +201030279302</p>
                        </div>
                        <div className="contact-data address-container">
                            <h3>Address</h3>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
                                <a
                                    href="https://maps.app.goo.gl/8dJDVacivLgKNsDt8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="address-link"
                                >
                                    MAADI THE FIELD
                                </a>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
                                <a
                                    href="https://maps.app.goo.gl/jCtyZrL1HmehWnE56"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="address-link"
                                >
                                    NEW CAIRO O1 BRASS MONKEYS
                                </a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4>For more info check the <Link to="/faq&ap">FAQ & AP</Link></h4>
                    </div>
                </div>

                <div data-aos="fade-up-left">
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className="btn-submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
