import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    const className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className ={`${className} font-xl`} >Sylesheets</h1>
        </div>
    )
}

export default Stylesheet
