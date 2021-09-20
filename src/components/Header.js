import {AppBar, makeStyles, Toolbar, IconButton } from '@material-ui/core';
import React from 'react';

import { useHistory } from 'react-router';
import logo from '../assets/images/logo.png';
import searchIcon from '../assets/icons/search.svg';
import userIcon from '../assets/images/user.png';
import HeroMovie from '../components/HeroMovie';

const Header = () => {
    const classes=  useStyles();
    const history = useHistory();
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
            <HeroMovie/>
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
