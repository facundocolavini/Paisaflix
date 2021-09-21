import React from 'react'
import ButtonWatch from './ButtonWatch';
import CardsTrailers from './CardsTrailers';
import start from '../assets/icons/star.svg';
import hStart from '../assets/icons/half-star.svg';
import imghero from '../assets/images/hero-img.png'
import {baseurl} from '../utils/baseUrl';
import { useState, useEffect } from 'react';

const HeroMovie = () => {
  /*   const data = props.data; */
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
                            <p>Genre:{ }</p>
                            <p>Duration:{}</p>
                            <p>Rating:{ }</p>
                    </div>
                    <ButtonWatch/>
                    </div>
                </div>
            </div>
            <img src={imghero} className="movie" alt="movie" ></img>    
      {/* {  {!trailers ? 'Sorry... trailers not found' : <CardsTrailers movieTrailers={trailers} />}} */}
        </div>

    )
}

export default HeroMovie
