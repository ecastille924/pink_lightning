import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postSuperfan } from '../actions/SuperfansActions'

class SuperfansForm extends Component {
    
    state= {
        firstname:"",
        lastname:"",
        email:"",
    }
    
    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSuperfanSubmit = (e) =>{
        e.preventDefault()
        this.props.postSuperfan(this.state)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSuperfanSubmit} className="form">
            <h3>Join the Superfan Mailing List!</h3>  
            <input 
                name="firstname"  
                type="text" 
                value={this.state.firstname} 
                onChange={this.handleInput} 
                placeholder="First Name"
            />
            <br/>
            <input 
                name="lastname"  
                type="text" 
                value={this.state.lastname} 
                onChange={this.handleInput} 
                placeholder="Last Name"
            />
            <br/>
            <input 
                name="email"  
                type="text" 
                value={this.state.email} 
                onChange={this.handleInput} 
                placeholder="email address"
            />
            <br/>
            <input  
                type="submit" 
                value="Join!" 
            />

            </form>
        )
    }
}
export default connect(null, { postSuperfan })(SuperfansForm)