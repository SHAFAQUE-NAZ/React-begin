import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

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

    shouldComponentUpdate(){
        console.log("LifecycleA derived From ShouldComponent Update")
        return true

    }

    getSnapshotBeforeUpdate(prevProps ,prevState){
        console.log("LifecycleA derived From getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA  componentDidUpdate")
    }

    changeState = () =>{
        this.setState({
            name:"Codevolution"
        })
    }
   
    
    render() {
        console.log("LifecycleA render")
        return (
            <div>
            <div>
               Lifecycle A 
            </div>
            <button onClick = {this.changeState}>Change State</button>
            <LifecycleB />

            </div>
        )
    }
}

export default LifecycleA
