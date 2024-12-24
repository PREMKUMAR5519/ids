import React from 'react';
import '../styles/Services.css';

const servicesData = [
  {
    title: 'Web Design',
    description: 'We specialize in designing static and dynamic websites that are customized for your needs.',
    icon: '🖥️',
  },
  {
    title: 'Web Development',
    description: 'Customized web application development to suit your business requirements.',
    icon: '💻',
  },
  {
    title: 'Ecommerce Development',
    description: 'Professional eCommerce websites starting at ₹24,000. Trusted since 2014.',
    icon: '🛒',
  },
  {
    title: 'Ecommerce Development',
    description: 'Professional eCommerce websites starting at ₹24,000. Trusted since 2014.',
    icon: '🛒',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="service-cardd">
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <a href="/gallery" className="view-gallery">View Gallery →</a>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our <span className="highlight-text">Services</span></h2>
      <h3>We provide the best service for you</h3>
      <p>From cost-effective digital marketing strategies to convenient shopping experiences with a E-commerce website.</p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
