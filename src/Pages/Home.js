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

    const formatViews = (n)=>{
            return n.map(movie=>{
                    let x=(''+movie.views).length;
                    let p=Math.pow;
                    let d=p(10,true);
                    x-=x%3;
                    let format=Math.round(movie.views*d/p(10,x))/d+" KMGTPE"[x/3]
                    return format;
                })
        }
    const time = toHourAndMins(movies);
    const views = formatViews(movies);

  
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

    const getListMovies= async () => {
        try {
                const data = await axios.get(MOVIES_ENDPOINT, CONFIG);
                const responseJSON = data['data']['data'];
                setMovies(responseJSON);
                return data;
        }catch (err) {
                console.log(err);
        }
    }; 

    const getHeroMovie = async ()=>{
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

    useEffect(()=>{
        try {
            getListMovies();
            getTrailers();
            getHeroMovie();
        } catch (err) {
            console.log(err);
        }
    },[]);


 
 

    return (
        <Fragment>
            <Hero trailers={trailers} movie={movie}/>
            <ListMovies views={views} time={time} movies={movies}/>
            <Footer/>
        </Fragment>
    )
}


export default Home
