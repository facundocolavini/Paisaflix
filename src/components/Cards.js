import React from 'react'
const Cards = ({cards}) => {

    
    return (
        <div className="trailers wrapper">      
            <h2 className="title-trailer">Trailers</h2>
            {   (cards.lenght > 1) ?(
                    cards.map((trailer,index) =>{
                        return(
                            <div key={trailer._id} className="trailers-container ">
                                <div className="trailer ">
                                    <img src={trailer.trailerImage} className="image-trailer" alt="trailer"></img>
                                    <span className="number">{`0${index+1}`}</span>
                                </div>
                            </div>
                        )
                    })
                )
                :(
                    cards.map((trailer) =>{
                        return(
                            <div key={trailer._id} className="trailers-container ">
                                <div className="trailer ">
                                    <img src={trailer.trailerImage} className="image-trailer" alt="trailer"></img> 
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default Cards
