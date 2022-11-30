import React from 'react';
import { Link } from "react-router-dom";
import background from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className='p-20 bg-no-repeat bg-cover bg-center mt-20' style={{ backgroundImage: `url(${background})` }}>
            <div className="footer mt-5 ml-10">
                <div>
                    <span className="footer-title text-lg">SERVICES</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title text-lg">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title text-lg">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='text-center mt-20'>
                Copyright 2022 All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;