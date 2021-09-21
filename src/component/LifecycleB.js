import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shafaque"
        }
        console.log("LifecycleB Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleB derived From Did Mount")
    }

    shouldComponentUpdate(){
        console.log("LifecyclB derived From ShouldComponent Update")
        return true

    }

    getSnapshotBeforeUpdate(prevProps ,prevState){
        console.log("LifecycleB derived From getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
    }

   
    
    render() {
        console.log("LifecycleB render")
        return (
            <div>
               Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
