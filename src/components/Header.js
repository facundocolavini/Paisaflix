import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/icons/search.svg';
import userIcon from '../assets/images/user.png';

const Header = () => {
    return (
        <header className="header wrapper">
            <div className="nav-left">
                <Link to={"/"} className="nav-logo" alt="logo">Paisaflex </Link> 
                <ul className="nav-list">
                    <li className="list-item"><Link to={"/"} className="link-list" href="index.html">Home</Link> </li>
                    <li className="list-item"><Link to={"/"} className="link-list" href="index.html">Contact Us</Link></li>
                    <li className="list-item"><Link to={"/"} className="link-list" href="index.html">FAQ</Link></li>
                    <li className="list-item"><Link to={"/"} className="link-list" href="index.html">Pricing</Link></li>
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
