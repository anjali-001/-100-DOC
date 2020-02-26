import React, {Component} from 'react'

class NewFile extends Component {

    constructor(){
        super()
        this.state = {
            name: "Anjali",
            age: 21
        }
    }

    render(){
        return(
        <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
        </div>
        )
    }
    

}

export default NewFile