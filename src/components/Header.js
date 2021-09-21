import {AppBar, makeStyles, Toolbar, IconButton } from '@material-ui/core';
import React, { Fragment } from 'react';

import { useHistory } from 'react-router';
import {baseurl} from '../utils/baseUrl';
import { useState, useEffect } from 'react';

const Header = () => {
    const classes=  useStyles();
    const history = useHistory();
    const HERO_ENDPOINT = baseurl('/hero');
    const TRAILERS_ENDPOINT = baseurl('/trailers');
    const [movieHero , setMovieHero] = useState();

    useEffect(()=>{
        getHeroMovie();
    },[]);

    const getHeroMovie= async () => {
        const data = await fetch(HERO_ENDPOINT,{
            "method": 'GET',
            "headers": {
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            }

        });
        const responseJSON = await data.json();
        setMovieHero(responseJSON);
  
    }; 

    



    return (
   
        <div className="header">
            <AppBar elevation={0} position="sticky" className={classes.root}>
                <Toolbar className="toolbar">
                    
                    <div className="wrapper-left"> 
                        <IconButton onClick={()=>{history.push("/")}}>
                            <img  src={logo} className="logo" alt="logo" ></img> 
                        </IconButton>

                        <ul  className="list">
                            <li className="list-item"><a className="link-list" href="index.html">Home</a> </li>
                            <li className="list-item"><a className="link-list" href="index.html">Contact Us</a></li>
                            <li className="list-item"><a className="link-list" href="index.html">FAQ</a></li>
                            <li className="list-item"><a className="link-list" href="index.html">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="wrapper-right">
                        <img  src={searchIcon} className="search-icon" alt="search icon" ></img> 
                        <img  src={userIcon} className="user-icon" alt="user avatar" ></img> 
                        <span className="name-user">Soy Paisanx</span>
                    </div>    
                </Toolbar>
            </AppBar>
            <HeroMovie  />
        </div>
     
    )
}
const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "transparent",
        top:0,
        fontFamily: "DM Sans",
        paddinTop:"30px",
    },
    toolbar:{
        display:"flex",
       
    },

}));

export default Header
