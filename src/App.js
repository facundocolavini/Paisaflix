import React from 'react'
/* import logo from './assets/images/logo.png';

import hStar from './assets/icons/half-star.svg';
import img1 from './assets/images/img-trailers-1.png'
import search from './assets/icons/search.svg';
import imghero from './assets/images/hero-img.png'
import { IconButton } from '@material-ui/core'; */
/* import { useHistory } from 'react-router';
import {baseurl} from './utils/baseUrl';
import star from './assets/icons/star.svg'; */
import Home from './Pages/Home';


const App = () => {

/*  
  const BASE = 'https://paisa-challange.herokuapp.com/api/v1/paisaflix';


const [movie,setMovies]= useState({});



  useEffect(()=>{
    getHeroMovie();
  },[])

 const getHeroMovie = async ()=>{
  const response =  await fetch(HERO_ENDPOINT);
  const responseJSON = await response.json();

  console.log(responseJSON ,'responseJSON');
  console.log(responseJSON.data,'responseJSON.data')
  setMovies(responseJSON);
  } */
/*   console.log(movie.data,'movie')
  const data = movie.data; */
/*   const history = useHistory(); */
  return (
    <div className="container">
     
      <Home/>

   {/*    <main className="main">
        <div className="title-featured">
          <h2 className="title-1">Featured</h2>
          <span className="title-2">View More</span>
        </div>
        <div className="lists-movies">
          <div className="movie-item">
            
            <div className="category"><span className="category-content">Action</span></div>
            <div className="informarion-movie">
              <img src={star} className="clock-icon" alt="duration movie" ></img>
              <span className="duration">1hr 24mins</span>
              <img src={star} className="eye-icon" alt="views" ></img>
              <span className="views">1hr 24mins</span>
            </div>
            <h3 className="title-movie">Title movie</h3>
          </div>
          <div className="movie-item"></div>
          <div className="movie-item"></div>
          <div className="movie-item"></div>
          <div className="movie-item"></div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-left">
          <h3 className="title-footer">Paisaflix</h3>
          <span className="text-footer-1">Join Newsletters</span>
          <div className="contact-us ">
            <span className="arrow"><img src={star} className="arrow-icon" alt="arrow" ></img></span>
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
          <img src={star} className="ubication-icon" alt="ubication" ></img>
          <span className="text-footer-2">8819 Enrique Martinez, Bs As., 90280</span>
          <img src={star} className="email-icon" alt="email"></img>
          <span className="text-footer-2">hola@paisanos.io</span>
          <img src={star} className="phone-icon" alt="phone"></img>
          <span className="text-footer-2">+271 386-647-3637</span>
        </div>
      </footer> */}

      {/* <header className="navbar">
       
        <div className="wrapper-left"> 
          <a  href="index.html" className="logo" alt="logo">Paisaflex</a> 
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
      <div className="hero ">
        <div className="description-movie">
         
        </div>
        <div className="cover-image">
          <img className="img-hero" src={movie.data?.coverImage}  alt="movie" ></img> 
        </div>
        <div className="trailers">
          <h2 className="title-trailer">Trailers</h2>
          <div className="trailers-container">
            <div className="trailer">
              <img src={img1} className="image-trailer" alt="trailer"></img>
            </div>
          </div>
        </div>
      </div> */}
    </div> 
    

   
  )
}

export default App
