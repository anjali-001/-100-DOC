import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            isHappy: false,
            isContented: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, type, value, checked} = event.target

            //type==="checkbox"? this.setState({[name]:checked}):this.setState({[name]: value})
            type==="checkbox"?
            checked?

            this.setState({
                [name]:"True"
            }):this.setState({
                [name]:"False"
            })

            :
            this.setState({
                [name]: value
            })

        
    }




    render(){
        
        return(
            <form>
                <input type="text" 
                value={this.state.firstName}
                placeholder="First Name" 
                onChange={this.handleChange}
                name="firstName"/>

                <input type="text" 
                value={this.state.lastName} 
                placeholder="Last Name" 
                onChange={this.handleChange}
                name="lastName"/>

                <br/><br/>
                <input type="checkbox" 
                name="isFriendly" 
                onChange={this.handleChange}/>Is Friendly? <br/>

                <input type="checkbox" 
                name="isHappy" 
                onChange={this.handleChange}/>Is Happy?<br/>

                <input type="checkbox" 
                name="isContented" 
                onChange={this.handleChange}/>Is Contented?<br/><br/>
                <button>Submit</button>

                <div>
                <h2>{this.state.firstName}</h2>
                <h2>{this.state.lastName}</h2>
        <h3>Friendly? {this.state.isFriendly}</h3>
        <h3>Happy? {this.state.isHappy}</h3>
        <h3>Contented? {this.state.isContented}</h3>
                </div>
            </form>
        )
    }
}

export default Form