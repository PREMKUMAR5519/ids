import React, { useState } from 'react';
import '../styles/Footer.css';  // Assuming external CSS for styling
import axios from 'axios';
import logo from '../images/logo.png'
const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        phone: '',
        service: 'Web Development'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.example.com/submit', formData);
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <footer className="footer-container">
            <div className="footer-left">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="footer-form">
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Organization:</label>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Service:</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value="Web Development">Web Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="footer-right">
              <div className='footer-right1'>
          <img src={logo} alt="" />
              </div>
              <div className='footer-right2'>
              <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Info</h3>
                    <p>Address: 9016, New York</p>
                    <p>Phone: +1 212-835-5044</p>
                    <p>Email: example@email.com</p>
                </div>
              </div>
            </div>
        </footer>
    );
};

export default Footer;
