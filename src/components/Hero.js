
import React from 'react'
import star from '../assets/icons/star.svg';
import hStar from '../assets/icons/half-star.svg';
import img1 from '../assets/images/img-trailers-1.png';
import Header from '../components/Header';
import Cards from '../components/Cards';

const Hero = (props) => {
/*     console.log(props.dataHero);
    console.log(props.dataTrailers); */
    const cards = props.dataTrailers;
    return (
        <div className="hero">
            <Header/>
            <div className="hero-description wrapper">
                <div className="hero-title">
                    <span className="title-description">{props.dataHero?.name}</span>
                </div> 
                <div className="hero-stars"> 
                    <img  src={star} className="star-icon" alt="star rating"></img> 
                    <img  src={star} className="star-icon" alt="star rating"></img> 
                    <img  src={star} className="star-icon" alt="star rating"></img> 
                    <img  src={star} className="star-icon" alt="star rating"></img> 
                    <img  src={hStar} className="star-icon" alt="star rating"></img> 
                </div>
                <p className="hero-abstract">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul className="hero-list">
                    < li className="text-hero">Genre: {props.dataHero?.genre}</li>
                    <li className="text-hero">Duration: {props.dataHero?.duration}</li>
                    <li className="text-hero">Rating: {props.dataHero?.rating}</li>
                </ul>
                <button  className="btn-hero" type="submit">Watch now</button>
            </div>
            <Cards cards={cards}/>
            <div className="cover-image">
                <img className="img-hero" src={props.dataHero?.coverImage}  alt="movie" ></img> 
            </div>
        </div>
    )   
}


export default Hero
