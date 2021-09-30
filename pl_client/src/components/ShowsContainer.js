import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchShows } from '../actions/ShowsActions' 

 class ShowsContainer extends Component {
   
    componentDidMount(){
        this.props.fetchShows()
    }

    render() {
        return (
            <div>
                Shows
            </div>
        )
    }
}

export default connect(null, {fetchShows})(ShowsContainer)