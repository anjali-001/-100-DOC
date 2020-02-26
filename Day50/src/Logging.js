import React, {Component} from 'react'


class Logging extends Component {

    constructor(props){
        super(props)
        this.state ={
            isLoggedIn: false
        }
        this.handleClick =this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
             isLoggedIn: !this.state.isLoggedIn
        })
        
    }




    render(){
        let butt = this.state.isLoggedIn? "Log In":"Log Out"
        return(
            <div>
                {this.state.isLoggedIn? <h1>Logged Out</h1>:<h1>Logged In</h1>}
                <button onClick ={this.handleClick}>{butt}</button>
            </div>
        )
    }
}
export default Logging