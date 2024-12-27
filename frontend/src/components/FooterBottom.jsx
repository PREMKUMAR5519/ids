import React from 'react';
import '../styles/Footer.css';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>Powered by <span className="brand">innoversedigitalsolution</span> 2024</p>
            </div>
            <div className="footer-bottom-right">
                <a href="#facebook" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#twitter" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#instagram" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#pinterest" aria-label="Pinterest">
                    <i className="fab fa-pinterest"></i>
                </a> */}
                {/* <a href="#youtube" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                </a> */}
            </div>
        </div>
    );
};

export default FooterBottom;
