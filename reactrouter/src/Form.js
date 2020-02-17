import React, { Component } from 'react';

class Form extends Component{

	render(){
		return(
			<div>
				<form>
				<label> fullname </label>
				<input type="text" /> <br/>

				<label> Email </label>
				<input type="email" /> <br/>

				<label> Mobile </label>
				<input type="number" /> <br/>

				<label> Message </label>
				<textarea/> <br/>

				<input type="submit" value="Send"/>
				</form>
			</div>
			)
	}
}

export default Form;
