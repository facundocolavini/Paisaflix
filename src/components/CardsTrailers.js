import React from 'react'
import trailer1 from '../assets/images/img-trailers-1.png'
function CardsTrailers() {

    return (
        <div className="trailers">
           <h2 className="title-trailer">Trailers</h2>
           <div className="trailers-container">
                <div className="trailer">
                    <img src={trailer1} className="image-trailer" alt="trailer"></img>
                    <img src={trailer1} className="image-trailer" alt="trailer"></img>
                    <img src={trailer1} className="image-trailer" alt="trailer"></img>
                    <img src={trailer1} className="image-trailer" alt="trailer"></img>

                </div>
           </div>
        </div>
    )
}

export default CardsTrailers
