import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn : false
        }
    }
    
    render() {
        let message
        if(this.state.IsLoggedIn){
            message =  <div><h1>Welcome Vishwas</h1></div>
        }
        else{
            message = <div>Welcome Guest</div>
        }
        return message
    }
    
}

export default UserGreeting
