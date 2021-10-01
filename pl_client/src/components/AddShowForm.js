import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postShow } from '../actions/ShowsActions'
import ShowsContainer from './ShowsContainer'

class AddShowForm extends Component {
    
    state= {
        venue:"",
        date:"",
        cover:"",
        info:""
    }
    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleShowSubmit = (e) =>{
        e.preventDefault()
        this.props.postShow(this.state)
        this.setState({
            venue:"",
            date:"",
            cover:"",
            info:""
        })
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleShowSubmit} className="form">
            <h3>Add A Show:</h3>  
            <input 
                name="venue"  
                type="text" 
                value={this.state.venue} 
                onChange={this.handleChange} 
                placeholder="Venue"
                required
            />
            <br/>
            <input 
                name="date"  
                type="text" 
                value={this.state.date} 
                onChange={this.handleChange} 
                placeholder="Date"
                required
            />
            <br/>
            <input 
                name="cover"  
                type="text" 
                value={this.state.cover} 
                onChange={this.handleChange} 
                placeholder="Cover Charge"
                required
            />
            <br/>
            <input 
                name="info"  
                type="text" 
                value={this.state.info} 
                onChange={this.handleChange} 
                placeholder="Show Details"
                required
            />
            <br/>
            <input  
                type="submit" 
                value="Add" 
            />
            </form>
            <ShowsContainer />
            </div>
        )
    }
}
export default connect(null, { postShow })(AddShowForm)