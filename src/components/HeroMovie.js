import React, { Fragment } from 'react'
import star from '../assets/icons/star.svg';
import hStar from '../assets/icons/half-star.svg';
const HeroMovie = ({hero}) => {

    return (
        <Fragment>
                <div className="hero-description wrapper">
                    <div className="hero-title">
                        <span className="title-description">{hero?.name}</span>
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
                        <li className="text-hero">Genre: {hero?.genre}</li>
                        <li className="text-hero">Duration: {hero?.duration}</li>
                        <li className="text-hero">Rating: {hero?.rating}</li>
                    </ul>
                    <button  className="btn-hero" type="submit">Watch now</button>
                </div>
                <div className="cover-image">
                    <img className="img-hero" src={hero?.coverImage}  alt={hero?.name} ></img> 
                </div>
        </Fragment>
    )
}

export default HeroMovie
