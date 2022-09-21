import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-title'>
                <a href='/About' className='footer-content'>S3XY &copy;2022</a>
            </div>
            <div className='about'>
                <a href='/About' className='footer-content'>About</a>
            </div>
            <div className='contact'>
                <a href='/Contact' className='footer-content'>Contact</a>
            </div>
            <div className='credits'>
                <a href='/Credits' className='footer-content'>Credits</a>
            </div>
            <div className='instagram'>
            <a><img src={require("../../images/instagram-logo.jpeg")} height={30} width={30}/></a>
            </div>
            <div className='twitter'>
                <a><img src={require("../../images/twitter-logo.png")} height ={25} width={25}/></a>
            </div>
            <div className='app-store'>
                <a>App Store</a>
            </div>
        </div>
    )
}

export default Footer;