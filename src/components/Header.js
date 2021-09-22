import React from 'react';
import searchIcon from '../assets/icons/search.svg';
import userIcon from '../assets/images/user.png';

const Header = () => {
    return (
        <header className="header wrapper">
            <div className="nav-left">
                <a href="index.html" className="nav-logo" alt="logo">Paisaflex </a> 
                <ul className="nav-list">
                    <li className="list-item"><a className="link-list" href="index.html">Home</a> </li>
                    <li className="list-item"><a className="link-list" href="index.html">Contact Us</a></li>
                    <li className="list-item"><a className="link-list" href="index.html">FAQ</a></li>
                    <li className="list-item"><a className="link-list" href="index.html">Pricing</a></li>
                </ul>
            </div>
            <ul className="nav-right">
                <li className="nav-list--2"><img  src={searchIcon} className="search-icon" alt="search icon" ></img></li>
                <li className="nav-list--2"><img  src={userIcon} className="user-icon" alt="user avatar" ></img> </li>
                <li className="nav-list--2"><span className="name-user">Soy Paisanx</span></li>
            </ul>  
      </header>
    )
}

export default Header
