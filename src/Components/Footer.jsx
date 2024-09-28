import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are dedicated to helping you find your dream home.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@realestate.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/properties">Properties</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Real Estate Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
