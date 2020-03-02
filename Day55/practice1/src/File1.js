import React, {Component} from 'react'
import logo from './logo.svg';

class File1 extends Component {

    constructor(){
        super()
        this.state ={
            isLoading: true
        }

    }

    componentDidMount() {
        setTimeout(()=> {this.setState({isLoading:false})},3000)
    }
    

    render(){
        return(
            <div>
                {this.state.isLoading? <img src={logo} alt="Logo"/>:<h1>React Logo</h1>}
            </div>
        )
    }
}

export default File1