import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero';

import { baseurl } from '../utils/baseUrl';


const Home = () => {
    const HERO_ENDPOINT = baseurl('/hero');
    const TRAILERS_ENDPOINT = baseurl('/trailers');
    console.log(TRAILERS_ENDPOINT);
    const [movie,setMovie]= useState({});
    const [trailers,setTrailers]= useState([]);

    const getHeroMovie = async ()=>{
        const response =  await fetch(HERO_ENDPOINT);
        const responseJSON = await response.json();
        setMovie(responseJSON);
    }

    const getTrailers = async ()=>{
        const response =  await fetch(TRAILERS_ENDPOINT);
        const responseJSON = await response.json();
        setTrailers(responseJSON);
    }

    useEffect(()=>{
        getHeroMovie();
        getTrailers();
    },[]);

    const dataHero = movie.data;
    const dataTrailers = trailers.data;
    
    console.log(dataTrailers,'Todos los trailers');
    return (
        <Hero dataTrailers={dataTrailers} dataHero={dataHero}/>
  
    )
}


export default Home
