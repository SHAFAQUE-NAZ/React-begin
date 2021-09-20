import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shafaque"
        }
        console.log("LifecycleA Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA derived From Did Mount")
    }

   
    
    render() {
        console.log("LifecycleA render")
        return (
            <div>
               Lifecycle A 
            </div>
        )
    }
}

export default LifecycleA
