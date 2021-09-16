import React from 'react'

function NameList() {
    //  const names = ["Bruce",'Diana','Clark']
    //  const nameList = names.map(name => <h2>{name}</h2>)
    const person = [
        {
            id : 1,
            name : 'Bruce',
            age : 30,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Clark',
            age : 28,
            skill : 'Angular'
        },
        {
            id : 3,
            name : 'Diana',
            age : 26,
            skill : 'Vue'
        }

    ]
    const personList = person.map(person => (<h2>I am {person.name}.I am {person.age} year old.I Know {person.skill}</h2>))
    return <div>{personList}</div>
    
}

export default NameList
