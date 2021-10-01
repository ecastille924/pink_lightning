import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postSuperfan } from '../actions/SuperfansActions'

class SuperfansForm extends Component {
    
    state= {
        firstname:"",
        lastname:"",
        email:"",
    }
    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSuperfanSubmit = (e) =>{
        e.preventDefault()
        alert("Thanks for joining & rock on!")
        this.props.postSuperfan(this.state)
        this.setState({
            firstname:"",
            lastname:"",
            email:"",
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSuperfanSubmit} className="form">
                <h3>Join the Superfan Mailing List!</h3>  
            <label>
                <input 
                    name="firstname"  
                    type="text" 
                    value={this.state.firstname} 
                    onChange={this.handleChange} 
                    placeholder="First Name"
                    className="form-input"
                    required
                />
            </label>  
                <br/>
            <label>
                <input 
                    name="lastname"  
                    type="text" 
                    value={this.state.lastname} 
                    onChange={this.handleChange} 
                    placeholder="Last Name"
                    className="form-input"
                    required
                />
                </label>
                <br/>
                <label>
                <input 
                    name="email"  
                    type="email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    placeholder="email address"
                    className="form-input"
                    required
                /> 
                </label>
                <br/>
                <input  
                    type="submit" 
                    value="Join!" 
                />
                </form>
                <p className="landing-sub-tag">
                    ~ We'll keep you up-to-date with news and upcoming show announcements ~
                </p>
            </div>
        )
    }
}
export default connect(null, { postSuperfan })(SuperfansForm)