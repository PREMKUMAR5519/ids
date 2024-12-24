import React from 'react';
import '../styles/TechSpecs.css';

const techSpecsData = [
  {
    title: 'Dynamic Website',
    description:
      'Dynamic websites offer content that can change and adapt based on user interaction, providing personalized experiences and real-time updates.',
    icon: '📡',
  },
  {
    title: 'Interactive Website',
    description:
      'Interactive websites enhance user engagement with interactive elements, forms, and media, ensuring an immersive experience.',
    icon: '⚙️',
  },
  {
    title: 'CMS Website',
    description:
      'CMS websites allow easy content management without coding, enabling quick updates and content publishing.',
    icon: '🗄️',
  },
];

const TechSpecCard = ({ spec }) => {
  return (
    <div className="tech-spec-card">
      <div className="tech-icon">{spec.icon}</div>
      <h3>{spec.title}</h3>
      <p>{spec.description}</p>
    </div>
  );
};

const TechSpecs = () => {
  return (
    <div className="tech-specs-container">
      <h2>Some <span className="highlight-text">Tech Specs</span></h2>
      <p>Explore the key technical specifications for different types of websites we offer.</p>
      <div className="tech-specs-grid">
        {techSpecsData.map((spec, index) => (
          <TechSpecCard key={index} spec={spec} />
        ))}
      </div>
    </div>
  );
};

export default TechSpecs;
