 
import React, { Fragment } from 'react'
import duration from '../assets/icons/clock.svg';
import views from '../assets/icons/eye.svg';
import loading from '../assets/icons/loading.svg';
const ListMovies = ({movies,handleMovie}) => {
    return (
        <Fragment>
            <main className="main wrapper">
                <div className="title-featured">
                    <h2 className="title-1">Featured</h2>
                    <span className="title-2">View More</span>
                </div>
                <div className="lists-movies">
                {  
                    (movies) ?
                        movies.map((movie,index)=>{
                            return(
                                <div onClick={(e)=>handleMovie()} key={movie._id} className={"movie-item-"+index}>
                                    <a  href="/"  className="movie-item">  
                                        <div className="card">
                                            <img src={movie.coverImage} className="movie-img" alt={movie.name}></img>
                                            <div className="information-movie">
                                                <div className="information-stats">
                                                    <img src={duration} className="clock-icon" alt="duration movie" ></img>
                                                    <span className="duration">{movie.duration}</span>
                                                    <img src={views} className="eye-icon" alt="views" ></img>
                                                    <span className="views">{movie.views}K views</span>
                                                </div>
                                                <h3 className="title-movie">{movie.name}</h3>
                                            </div>
                                            <div className="category">
                                                {movie.genre}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    :(   
                        <img src={loading} className="image-trailer" alt="loading"></img>
                    )
                }
                </div>
            </main>
        </Fragment>
    )
}

export default ListMovies
