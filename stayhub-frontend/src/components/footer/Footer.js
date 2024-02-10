import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-column-title">Company</div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Policies</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="footer-column-title">Discover</div>
                    <ul>
                        <li><a href="#">Trust & Safety</a></li>
                        <li><a href="#">Travel Credit</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">StayHub Citizen</a></li>
                        <li><a href="#">Business Travel</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="footer-column-title">Hosting</div>
                    <ul>
                        <li><a href="#">Why Host</a></li>
                        <li><a href="#">Hospitality</a></li>
                        <li><a href="#">Responsible Hosting</a></li>
                        <li><a href="#">Community Center</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="footer-column-title">Connect</div>
                    <ul>
                        <li><a href="https://github.com/link-to-github"><FaGithub /></a></li>
                        <li><a href="https://linkedin.com/link-to-linkedin"><FaLinkedin /></a></li>
                        <li><a href="https://instagram.com/link-to-instagram"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-policy">
                <a href="#">Cookie Policy</a>
            </div>
            <div className="footer-bottom">
                <div>© 2024 StayHub. A product of Domenico Zungri</div>
            </div>
        </footer>
    );
};

export default Footer;
