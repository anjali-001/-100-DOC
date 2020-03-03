import React, {Component} from 'react'

class Form extends Component {

    constructor(){
        super()
        this.state = {
            firstName: '',
            glutenFree: false,
            kosher: false,
            veg: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, type, value, checked} = event.target
        type==='checkbox'?
        checked? 
        this.setState({[name]: "True"}):this.setState({[name]: "False"})
        :
        this.setState({[name]: value})
        
    }

    render(){
        return(
            <form>
                <input type='text' 
                placeholder='First Name' 
                value={this.state.firstName}
                name='firstName' 
                onChange={this.handleChange}/><br/><br/>


                <div>
                <input type='checkbox'
                value={this.state.glutenFree}
                name='glutenFree' 
                onChange={this.handleChange}
                />Gluten Free?<br/>

                <input type='checkbox' 
                value={this.state.kosher}
                name='kosher' 
                onChange={this.handleChange}
                />Kosher?<br/>

                <input type='checkbox' 
                value={this.state.veg}
                name='veg' 
                onChange={this.handleChange}
                />Veg?<br/><br/><br/>
                </div>


                
                <button>Submit</button>

                <div>
                    <h3>{this.state.firstName}</h3>
                    <h3>Gluten Free? {this.state.glutenFree}</h3>
                    <h3>Kosher? {this.state.kosher}</h3>
                    <h3>Veg? {this.state.veg}</h3><br/><br/>
                    <textarea placeholder='Additional Requirements'></textarea>
                </div>
            </form>
        )
    }
}

export default Form