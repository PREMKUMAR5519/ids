import React from "react";
import "../styles/MarketingSection.css";

const MarketingSection = () => {
  return (
    <div className="marketing-section">
      <div className="content">
        <h1 className="title">Best Digital Marketing Agency in Chennai</h1>
        <p className="description">
          With our vast experience and proven track record with 1000+ clients,
          we can safely say that we are one of the best Digital Marketing
          Agencies in Chennai. Weboin digital marketing agency offers a ton of
          services that help you grow digitally including SEO, Social Media
          Marketing, Google Ads, Facebook & Instagram Ads, Website Development,
          and Lead generation services. At Weboin you are our partners, not
          just clients, and we aim to help and grow together.
        </p>
      </div>
      <div className="image-container">
        <img
          src="https://searchengineland.com/wp-content/seloads/2024/08/Advanced-analytics-techniques-to-measure-PPC.png" // Replace with actual path
          alt="Digital Marketing"
          className="animated-image"
        />
      </div>
    </div>
  );
};

export default MarketingSection;
