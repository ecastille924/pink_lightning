import React from 'react'

const Gallery = () => {
    return (
        <div className="gallery">
            <img src= '../images/pl1.jpg' alt="" className="upper-image" />
            <img src= '../images/pl2.jpg' alt="" className="upper-image" />
            <br/>
            <img src= '../images/pl3.jpg' alt="" className="image" />
            <img src= '../images/pl4.jpg' alt="" className="image" />
            <br/>
            <img src= '../images/pl5.jpg' alt="" className="image" />
            <img src= '../images/pl6.jpg' alt="" className="image" />
                
            <img src= '../images/pl7.jpg' alt="" className="image" />
            <img src= '../images/pl8.jpg' alt="" className="image" />
            <br/>
            <img src= '../images/pl9.jpg' alt="" className="lower-image" />
            <img src= '../images/pl10.jpg' alt="" className="lower-image" />
        </div>
    )
}

export default Gallery

