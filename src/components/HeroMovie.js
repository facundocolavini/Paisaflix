import React from 'react'
import ButtonWatch from '../components/ButtonWatch';
import CardsTrailers from './CardsTrailers';
import movieOverlay from '../assets/images/hero-img.png'
import start from '../assets/icons/star.svg';
import hStart from '../assets/icons/half-star.svg';

const HeroMovie = () => {
    return (
        <div className="overlay-hero">
        <div className="description-content">
            <div className="stats">      
                <h1 className="movie-title"> {}</h1>
                <div className="starts">
                    <img className="icon-star" src={start} alt="star" ></img> 
                    <img className="icon-star" src={start} alt="star" ></img> 
                    <img className="icon-star" src={start} alt="star" ></img> 
                    <img className="icon-star" src={start} alt="star" ></img> 
                    <img className="icon-star" src={hStart} alt="half start" ></img> 
                </div>
                <div className="description-movie">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="movie-information">
                        <p>Genre:Action</p>
                        <p>Duration:2 hr 45 min</p>
                        <p>Rating: 4.5</p>
                   </div>
                   <ButtonWatch/>
                </div>
            </div>
        </div>
        <img src={movieOverlay} className="movie" alt="movie" ></img>       
        <CardsTrailers/>
    </div>
    )
}

export default HeroMovie
