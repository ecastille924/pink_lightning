import React from 'react'
import { connect } from 'react-redux'

function SuperfansList({superfans}) {
    console.log(superfans)
    return (
        
        <div className="show-div">
            <p className = "landing-sub-tag">Thank you to our most recent superfans!</p>
            <p className = "landing-sub-tag">See you at the show, </p>
                {superfans.map(superfan =>
                     <ul key={superfan.id} className= "ul"> <li key={superfan.firstname} className= "superfan-name">
                         {superfan.firstname} <br/>
                     </li></ul>)}
        </div>
    )}

const mapStateToProps = (state) => {
    return { superfans: state.superfans }
}
export default connect(mapStateToProps)(SuperfansList)