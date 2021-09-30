import React from 'react'
import { connect } from 'react-redux'


function ShowsList({shows}) {
    return (
        <div>
            {shows.map(show => 
                <li key= {show.id}>
                    {show.venue} - {show.date}
                </li>)}
        </div>
    )}

const mapStateToProps = (state) => {
    return { shows: state.shows }


}
export default connect(mapStateToProps)(ShowsList)