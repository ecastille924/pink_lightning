import React from 'react'
import PropTypes from "prop-types"

function Videos({clipId}) {
    return (
        <div id="vid-clip">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${clipId}`}
            />
        </div>
    )  
}
Videos.propTypes = {
    clipId: PropTypes.string.isRequired
}

export default Videos
