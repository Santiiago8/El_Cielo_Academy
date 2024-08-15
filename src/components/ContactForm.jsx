import React, { useState } from 'react'
import '../styles/ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        classType: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    }

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
                            <p><FontAwesomeIcon icon={faPhone} className='fa-icon' /> +201128239365</p>
                        </div>
                        <div className="contact-data address-container">
                            <h3>Address</h3>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className='fa-icon' /> Maadi as Sarayat Al Gharbeyah, Victoria Sq (Intersection Rd 216 & Rd 250).</p>
                        </div>
                    </div>
                    <div>
                        <h4>For more info check de <Link to="/faq&ap">FAQ & AP</Link></h4>
                    </div>
                </div>

                <div data-aos="fade-up-left">
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    type="text"
                                    id='firstName'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='lastName'>Last Name</label>
                                <input
                                    type="text"
                                    id='lastName'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor='classType'>Class Type</label>
                                <select
                                    id="classType"
                                    name='classType'
                                    value={formData.classType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a class</option>
                                    <option value="aerial-silks">Aerial Class</option>
                                    <option value="aerial-hoop">Aerial Hoop & Straps</option>
                                    <option value="bungee-dance">Bungee Dance Fitness</option>
                                    <option value="circus-factory">Circus Factory</option>
                                    <option value="full-body">Full Body Program</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {formData.classType === 'other' && (
                                <div className="form-group other-reason">
                                    <p>Please specify your reason below</p>
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className='btn-submit' type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
