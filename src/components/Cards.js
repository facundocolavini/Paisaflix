import React from 'react'
const Cards = ({cards}) => {

    return (
        <div className="trailers wrapper">      
            <h2 className="title-trailer">Trailers</h2>
            {   (cards) ?
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
                :(
                    <span className="title-trailer">Trailers not found :( </span>
                )
            }
        </div>
    )
}

export default Cards
