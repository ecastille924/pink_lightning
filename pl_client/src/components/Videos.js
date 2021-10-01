import React from 'react'

function Videos() {
    return (
        <div className="video-div">
            <iframe
                className="youtube-clip"
                title="dangerous-woman"
                src="https://www.youtube.com/embed/ZiqsO4umkh8"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                frameBorder="3"> 
            </iframe>
            <iframe
                className="youtube-clip" 
                title="your-love"
                src="https://www.youtube.com/embed/0bBeN1etQF0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                frameBorder="3"> 
            </iframe>
            <br/>
            <iframe
                className="youtube-clip" 
                title="since-u-been-gone"
                src="https://www.youtube.com/embed/Zv-V2SwHySQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                frameBorder="3"> 
            </iframe>
            <iframe
                className="youtube-clip" 
                title="just-a-girl"
                src="https://www.youtube.com/embed/xBTNYJjMGjs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                frameBorder="3"> 
            </iframe>
            <br/>
            <iframe
                className="youtube-clip" 
                title="barracuda"
                src="https://www.youtube.com/embed/8ZQohC1oHhU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                frameBorder="3"> 
            </iframe>
            <iframe
                className="youtube-clip" 
                title="kncok-on-wood"
                src="https://www.youtube.com/embed/ccRE6J-yO4A"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                frameBorder="3"> 
            </iframe>
        </div>
    )
}

export default Videos



