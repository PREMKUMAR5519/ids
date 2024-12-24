import React from 'react';
import '../styles/Pricing.css';

const pricingPlans = [
  {
    title: 'Starter',
    price: 299,
    features: [
      'Basic Website Design',
      'Up to 5 Pages',
      'Mobile Responsive',
      'Limited Support',
    ],
  },
  {
    title: 'Advanced',
    price: 599,
    features: [
      'Custom Design',
      'Up to 15 Pages',
      'SEO Optimization',
      '1 Year Free Support',
    ],
  },
  {
    title: 'Professional',
    price: 999,
    features: [
      'E-commerce Integration',
      'Unlimited Pages',
      'Advanced SEO',
      'Priority Support',
    ],
  },
];

const PricingCard = ({ plan }) => {
  return (
    <div className={`pricing-card ${plan.title === 'Advanced' ? 'highlight' : ''}`}>
      <h3>{plan.title}</h3>
      <h1>${plan.price}</h1>
      <p>/ one-time</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="enquire-button">Enquire Now</button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Our <span className="highlight-text">Pricing</span></h2>
      <p>Choose the best plan that fits your business needs</p>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
