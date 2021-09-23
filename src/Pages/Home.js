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
    const toHourAndMins= (values)=>{
        if(values.length >= 1){
            return values.map(x=>{
            let min = x.duration;
            let hours = Math.floor(min/60);
            min = min % 60;
            return `${hours}hr:${min} mins`;
            })
        }else{
            let min = values.duration;
            let hours = Math.floor(min/60);
            min = min % 60;
            return `${hours}hr:${min} mins`;
        }

    }
    const updateInfo = async (values )=>{
        try {
            const data = await axios.get(HERO_ENDPOINT, CONFIG);
            const responseJSON = data['data']['data'];
            setMovie(prevState => {
                return {...prevState,
                   ...responseJSON, ...{duration: toHourAndMins(responseJSON)}}
                }
                );
        } catch (err) {
                console.log(err);
        }
    }


    const ratingStar =(movie)=>{
        const maxRating = movie.rating;
        const starRounded = Math.round(maxRating);
        console.log(starRounded)
    }
    console.log(ratingStar(movie));
    useEffect(()=>{
        try {
            getListMovies();
            getTrailers();
            updateInfo();
        } catch (err) {
            console.log(err);
        }
    },[]);

    const p =toHourAndMins(movies)
    console.log( movies,'UPDATE');
    console.log( toHourAndMins(movies),'DATA UP');

    return (
        <Fragment>
            <Hero trailers={trailers} movie={movie}/>
            <ListMovies  movies={movies}/>
            <Footer/>
        </Fragment>
    )
}


export default Home
