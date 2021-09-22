import React, { Fragment } from 'react'
import arrow from '../assets/icons/arrow.svg';
import location from '../assets/icons/location.svg';
import email from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="footer-left">
                <h3 className="title-footer">Paisaflix</h3>
                <span className="text-footer-1">Join Newsletters</span>
                <div className="contact-us ">
                    <span className="arrow"><img src={arrow} className="arrow-icon" alt="arrow" ></img></span>
                    <input className="input-contact " type="text" placeholder="Insert your email here"/>
                </div>
                </div>
                <div className="footer-right">
                <div className="colum-product">
                    <span className="text-footer-1">Product</span>
                    <span className="text-footer-2">Movies</span>
                    <span className="text-footer-2">TV Show</span>
                    <span className="text-footer-2">Videos</span>
                </div>
                <div className="colum-media">
                    <span className="text-footer-1">Product</span>
                    <span className="text-footer-2">Movies</span>
                    <span className="text-footer-2">TV Show</span>
                    <span className="text-footer-2">Videos</span>
                </div>
                <div className="colum-sitemap">
                    <span className="text-footer-1">Product</span>
                    <span className="text-footer-2">Movies</span>
                    <span className="text-footer-2">TV Show</span>
                    <span className="text-footer-2">Videos</span>
                </div>
                </div>
                <div className="footer-bottom">
                    <img src={location} className="ubication-icon" alt="location icon"></img>
                    <span className="text-footer-2">8819 Enrique Martinez, Bs As., 90280</span>
                    <img src={email} className="email-icon" alt="email"></img>
                    <span className="text-footer-2">hola@paisanos.io</span>
                    <img src={phone} className="phone-icon" alt="phone"></img>
                    <span className="text-footer-2">+271 386-647-3637</span>
                </div>
            </footer> 
      </Fragment>
    )
}

export default Footer
