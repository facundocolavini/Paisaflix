import React, { Fragment, useEffect, useState } from 'react'
import { baseurl,CONFIG } from '../utils/baseUrl';
import Hero from '../components/Hero';
import ListMovies from '../components/ListMovies';
import Footer from '../components/Footer';
import axios from 'axios';




const Home = () => {
    const HERO_ENDPOINT = baseurl('/hero');
    const TRAILERS_ENDPOINT = baseurl('/trailers');
    const MOVIES_ENDPOINT = baseurl('/movies');

    const [movie,setMovie]= useState({});
    const [movies,setMovies]= useState([]);
    const [trailers,setTrailers]= useState([]);

    const getTrailers= async () => {
        try {
                const data = await axios.get(TRAILERS_ENDPOINT, CONFIG);
                const responseJSON = data['data']['data'];
                setTrailers(responseJSON);
                return data;
        } catch (err) {
                console.log(err);
        }
    }; 

    const getHeroMovie= async () => {
        try {
                const data = await axios.get(HERO_ENDPOINT, CONFIG);
                const responseJSON = data['data']['data'];
                setMovie(responseJSON);
                return data;
        } catch (err) {
                console.log(err);
        }
    }; 
    
    const getListMovies= async () => {
        try {
                const data = await axios.get(MOVIES_ENDPOINT, CONFIG);
                const responseJSON = data['data']['data'];
                setMovies(responseJSON);
                return data;
        } catch (err) {
                console.log(err);
        }
    }; 

       
/*     const getHeroMovie = async ()=>{
        const response =  await fetch(HERO_ENDPOINT);
        const responseJSON = await response.json();
        setMovie(responseJSON);
    } */
    const handleMovie = (e)=>{
        console.log("diste click")
    }

    console.log(handleMovie,'funcion');
    useEffect(()=>{
        try {
            getListMovies();
            getHeroMovie();
            getTrailers();
        } catch (err) {
            console.log(err);
        }
    },[]);

    


    return (
        <Fragment>
            <Hero trailers={trailers} movie={movie}/>
            <ListMovies handleMovie={handleMovie} movies={movies}/>
            <Footer/>
        </Fragment>
    )
}


export default Home
