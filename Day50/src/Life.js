import React, {Component} from 'react'

class Life extends Component {
    constructor(){
        super()
        this.state ={
            isLoggedIn: true
        }
    }

    componentDidMount(){
        setTimeout(() => {this.setState({isLoggedIn:false})},1500)
    }

    render(){
        return(
        <div>{this.state.isLoggedIn?<h1>Logged In</h1>:<h1>Logged Out</h1>}</div>
        )
    }
}

export default Life