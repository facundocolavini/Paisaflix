
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero';
import { baseurl, CONFIG } from '../utils/baseUrl';

const LandingMovie = () => {

    
    let {_id} = useParams();
    const MOVIE_BY_ID_ENDPOINT = baseurl(`/movies/${_id}`);
    const [movie,setMovie]= useState({});
    const [trailer,setTrailer]= useState([]);

    const toHourAndMins= (obj)=>{
        let min = obj.duration;
        let hours = Math.floor(min/60);
        min = min % 60;
        return `${hours}hr ${min} mins`;
    }

    const getLandingMovie = async ()=>{
        try {
            const data = await axios.get(MOVIE_BY_ID_ENDPOINT, CONFIG);
            const responseJSON = data['data']['data'];
            setTrailer([responseJSON]);
            setMovie(prevState => {
                return {...prevState,
                   ...responseJSON, ...{duration:toHourAndMins(responseJSON)}}
                }
            );
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        try {
            getLandingMovie(); 
        } catch (err) {
            console.log(err);
        }
    },[]);


    
    return (
        <Fragment>
            <Header/>
            <Hero trailers={trailer} movie={movie}/>
           
            <Footer/>
        </Fragment>
    )
}


export default LandingMovie
