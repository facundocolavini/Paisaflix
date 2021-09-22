
import React, { Fragment } from 'react'
import Header from '../components/Header';
import Cards from '../components/Cards';
import HeroMovie from './HeroMovie';

const Hero = ({trailers,movie}) => {

    
    return (
        <Fragment>
            <div className="hero">
                <Header/>
                <HeroMovie hero={movie}/>
                <Cards cards={trailers}/>
            </div>
        </Fragment>
    )   
}


export default Hero
