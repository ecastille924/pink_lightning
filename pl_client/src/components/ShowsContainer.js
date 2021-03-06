import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchShows } from '../actions/ShowsActions' 
import ShowsList from './ShowsList'

 class ShowsContainer extends Component {
   
    componentDidMount(){
        this.props.fetchShows()
    }

    render() {
        return (
            <div>
                <ShowsList />
            </div>
        )
    }
}

export default connect(null, {fetchShows})(ShowsContainer)