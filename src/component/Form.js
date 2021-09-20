import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comment : '',
             topic : 'react'
        }
    }

    handlerChangeUsername = event =>{
        this.setState({
           username : event.target.value 
        })
    }

    handlerChangeComments = event =>{
        this.setState({
           comment : event.target.value 
        })
    }

    handlerChangeTopic = event =>{
        this.setState({
           topic : event.target.value 
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }


    
    render() {
        const {username , comment , topic} = this.state
        return (
            
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>Username :</label>
            <input type = "text" value={username} onChange = {this.handlerChangeUsername} />
            </div>

            <div>
            <label>Comments :</label>
            <input type = "text" value={comment} onChange = {this.handlerChangeComments} />
            </div>

            <div>
            <label>Topic :</label>
            <select value={topic} onChange = {this.handlerChangeTopic}>
            <option value='angular'>Angular</option>
            <option value = 'Vue'>Vue</option>
            <option value = 'react'>React</option>
            </select>
            </div>

            <div>
            <button type='submit' value={this.state}>Submit</button></div>
            </form>
            
        )
    }
}

export default Form
