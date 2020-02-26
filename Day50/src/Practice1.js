import React, {Component} from 'react'

class Practice1 extends Component {

    constructor(){
        super()
        this.state ={
            isLoggedIn: true
        }

    }

    render(){
        let wordDisplay
        if (this.state.isLoggedIn){
            wordDisplay = "in"
        }else{
            wordDisplay= "out"
        }
        return(
            <div>
                <h1>You are currently Logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default Practice1