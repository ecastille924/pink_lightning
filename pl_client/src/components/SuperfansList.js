import React from 'react'
import { connect } from 'react-redux'

function SuperfansList({superfans}) {
    return (
        
        <div className="show-div">
            <p className = "landing-sub-tag">Thank you to our most recent superfan!!</p>
            <p className = "landing-sub-tag">See you at the show, </p>
            <h2 className = "superfan-name">{superfans.reduce((i, superfan) => 
                i = i > superfan.id ? i : (superfan.firstname), 0)}!</h2>
        </div>
    )}

const mapStateToProps = (state) => {
    return { superfans: state.superfans }
}
export default connect(mapStateToProps)(SuperfansList)