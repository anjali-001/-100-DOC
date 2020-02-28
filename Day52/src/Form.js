import React, {Component} from 'react'

class Form extends Component {
      constructor(){
          super()
          this.state = {
              firstName: "",
              isFriendly: false
          }
          this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event){
          const {name, value, type, checked}= event.target
          type==="checkbox"? this.setState({[name]: checked}):this.setState({[name]:value})
          
      }




    render(){
        return(
            <form>
                <input type="text" 
                value={this.state.firstName} 
                name="firstName" 
                onChange={this.handleChange} 
                placeholder="First Name"/>
                <br />
                <label>
                <input type="checkbox" name="isFriendly" onChange={this.handleChange}/>Is Friendly?
                </label>


        <h1>{this.state.firstName}</h1>
            </form>
        )
    }
}

export default Form