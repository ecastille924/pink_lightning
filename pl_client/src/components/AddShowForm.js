import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postShow } from '../actions/ShowsActions'

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
            <form onSubmit={this.handleShowSubmit} className="form">
            <h3>Add A Show:</h3>  
            <input 
                name="venue"  
                type="text" 
                value={this.state.venue} 
                onChange={this.handleChange} 
                placeholder="Venue"
            />
            <br/>
            <input 
                name="date"  
                type="text" 
                value={this.state.date} 
                onChange={this.handleChange} 
                placeholder="Date"
            />
            <br/>
            <input 
                name="cover"  
                type="text" 
                value={this.state.cover} 
                onChange={this.handleChange} 
                placeholder="Cover Charge"
            />
            <br/>
            <input 
                name="info"  
                type="text" 
                value={this.state.info} 
                onChange={this.handleChange} 
                placeholder="Show Details"
            />
            <br/>
            <input  
                type="submit" 
                value="Add" 
            />
            </form>
        )
    }
}
export default connect(null, { postShow })(AddShowForm)