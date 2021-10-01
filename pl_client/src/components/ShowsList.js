import React from 'react'
import { connect } from 'react-redux'

function ShowsList({shows}) {
    return (
        <div className="show-div">
            {shows.map(show => 
                <section key= {show.id} className="show-items">
                    {show.venue} / {show.date} / ${show.cover} <br/>
                    {show.info}
                </section>)}
        </div>
    )}

const mapStateToProps = (state) => {
    return { shows: state.shows }
}
export default connect(mapStateToProps)(ShowsList)