import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import iconDuration from '../assets/icons/clock.svg';
import iconViews from '../assets/icons/eye.svg';
import loading from '../assets/icons/loading.svg';
const ListMovies = ({movies,time,views}) => {
   

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
                                <div key={movie._id} className={"movie-item-"+index}>
                                    <Link to={`/landing/${movie._id}`} className="movie-item">  
                                        <div className="card">
                                            <img src={movie.coverImage} className="movie-img" alt={movie.name}></img>
                                            <div className="information-movie">
                                                <div className="information-stats">
                                                    <img src={iconDuration} className="clock-icon" alt="duration movie" ></img>
                                                    <span className="duration">{time[index]}</span>
                                                    <img src={iconViews} className="eye-icon" alt="views" ></img>
                                                    <span className="views">{views[index]} views</span>
                                                </div>
                                                <h3 className="title-movie">{movie.name}</h3>
                                            </div>
                                            <div className="category">
                                                {movie.genre}
                                            </div>
                                        </div>
                                    </Link>
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
