import React, {Component} from 'react'

class Logging extends Component {
    constructor(){
        super()
        this.state ={
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState =>{
            return{
            isLoggedIn: !prevState.isLoggedIn
            }
        }

        )
    }

    render(){
        let buttonText = this.state.isLoggedIn ? "Log Out":"Log In"
        return(
            <div>
                {this.state.isLoggedIn? <h1>Logged In</h1>: <h1>Logged Out</h1>}
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}

export default Logging