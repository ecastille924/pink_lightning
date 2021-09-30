import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperfans } from '../actions/SuperfansActions' 

 class SuperfansContainer extends Component {
   
    componentDidMount(){
        this.props.fetchSuperfans()
    }

    render() {
        return (
            <div>
                Superfans
            </div>
        )
    }
}

export default connect(null, {fetchSuperfans})(SuperfansContainer)