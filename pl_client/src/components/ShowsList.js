import React from 'react'
import { connect } from 'react-redux'

function ShowsList({shows}) {
    return (
        <div className="show-div">
            {shows.map(show => 
                <div key= {show.date} className="show-items">
                    {show.venue} / {show.date} / ${show.cover} <br/>
                    {show.info} 
                </div>)}
        </div>
    )}

const mapStateToProps = (state) => {
    return { shows: state.shows }
}
export default connect(mapStateToProps)(ShowsList)