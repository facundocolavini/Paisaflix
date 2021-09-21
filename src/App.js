import React from 'react'
import logo from './assets/images/logo.png';
import start from './assets/icons/star.svg';
import hStart from './assets/icons/half-star.svg';
import search from './assets/icons/search.svg';
import imghero from './assets/images/hero-img.png'
import searchIcon from './assets/icons/search.svg';
import userIcon from './assets/images/user.png';
import { useHistory } from 'react-router';
import img1 from './assets/images/img-trailers-1.png'

import { IconButton } from '@material-ui/core';
const App = () => {

  const history = useHistory();
  return (
    <div className="container">
        <header className="navbar">
          <div className="wrapper-left"> 
            <IconButton onClick={()=>{history.push("/")}}>
                <img  src={logo} className="logo" alt="logo" ></img> 
            </IconButton>
            <ul  className="list">
                <li className="list-item"><a className="link-list" href="index.html">Home</a> </li>
                <li className="list-item"><a className="link-list" href="index.html">Contact Us</a></li>
                <li className="list-item"><a className="link-list" href="index.html">FAQ</a></li>
                <li className="list-item"><a className="link-list" href="index.html">Pricing</a></li>
            </ul>
          </div>
          <div className="wrapper-right">
              <img  src={searchIcon} className="search-icon" alt="search icon" ></img> 
              <img  src={userIcon} className="user-icon" alt="user avatar" ></img> 
              <span className="name-user">Soy Paisanx</span>
          </div>    
        </header>
      
      <div className="hero">
        <div className="description-movie">
          <h1 className="movie-title">Blade Runner</h1>
          <div className="starts">
            <img className="icon-star" src={start} alt="star" ></img> 
            <img className="icon-star" src={start} alt="star" ></img> 
            <img className="icon-star" src={start} alt="star" ></img> 
            <img className="icon-star" src={start} alt="star" ></img> 
            <img className="icon-star" src={hStart} alt="half start" ></img> 
          </div>
          <div className="abstract">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="movie-information">
                <p>Genre:{ }</p>
                <p>Duration:{}</p>
                <p>Rating:{ }</p>
            </div>
            <button className="btn-watch" type="submit">Watch Now</button>
          </div>
        </div>
        <div className="movie">
          <img src={imghero}  alt="movie" ></img> 
        </div>
        <div className="trailers">
          <h2 className="title-trailer">Trailers</h2>
          <div className="trailers-container">
            <div className="trailer">
              <img src={img1} className="image-trailer" alt="trailer"></img>
            </div>
          </div>
        </div>
      
      </div>  
    </div>
    

   
  )
}

export default App
