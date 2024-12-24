import React, { useEffect, useRef } from 'react';
import '../styles/Movement.css';
import  Lottie  from "lottie-react";
import Anim1 from "../animation/Anim1.json"; // Adjust the path

const Movement = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      const cards = container.querySelectorAll('.service-card');
      cards.forEach((card) => {
        const dx = (event.clientX - card.offsetLeft - card.offsetWidth / 2) * 0.02;
        const dy = (event.clientY - card.offsetTop - card.offsetHeight / 2) * 0.02;
        card.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    };

    const handleMouseLeave = () => {
      const cards = containerRef.current.querySelectorAll('.service-card');
      cards.forEach((card) => {
        card.style.transform = 'translate(0, 0)';
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="movement-container" ref={containerRef}>
      <div className="center-box">
      <div style={{ width: 300, height: 300 }}>
      <Lottie animationData={Anim1} loop={true} />
    </div>
      </div>
      <div className="service-card">SEO</div>
      <div className="service-card">Ecommerce Website</div>
      <div className="service-card">Dynamic Website</div>
      <div className="service-card">Digital Marketing</div>
    </div>
  );
};

export default Movement;
