import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>

            <div>© 2024 StayHub. A product of Domenico Zungri</div>
            <div>
                <a href="https://github.com/link-to-github"><FaGithub /></a>
                <a href="https://linkedin.com/link-to-linkedin"><FaLinkedin /></a>
                <a href="https://instagram.com/link-to-instagram"><FaInstagram /></a>
            </div>
        </footer>
    );
};

export default Footer;

