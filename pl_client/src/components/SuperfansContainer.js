import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSuperfans } from '../actions/SuperfansActions'
import SuperfansForm from './SuperfansForm' 
import SuperfansList from './SuperfansList'

 class SuperfansContainer extends Component {
   
    componentDidMount(){
        this.props.fetchSuperfans()
    }

    render() {
        return (
            <div>
                < SuperfansForm />
                < SuperfansList/>
            </div>
        )
    }
}

export default connect(null, {fetchSuperfans})(SuperfansContainer)
