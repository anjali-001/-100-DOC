import React,{Component} from 'react';
import './Avatar.css';
import  Avatarlist from './Avatarlist';
import 'tachyons';




class Avatar extends Component{

		constructor(){
			super();
			this.state = {
				name : "Welcome to Avatar World "
			}
		}

		namechange(){
			this.setState({
			name: "Hello World!"
			})
		}



	render(){

		const avatarlistarray = [
		{
			id:1,
			name:"anjali",
			work: "web developer"
		},
		{
			id:2,
			name:"anja",
			work: "FrontEnd developer"
		},
		{
			id:3,
			name:"anj",
			work: "Database"
		},
		{
			id:4,
			name:"anjal",
			work: "BackEnd"
		}
	]

	const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
		return <Avatarlist key={i} id={avatarlistarray[i].name} 
								name={avatarlistarray[i].name} 
								work={avatarlistarray[i].work}/>
	} )

		return ( 
		<div className="mainpage">
			<h1> {this.state.name} </h1>
				{arrayavatarcard}	
			<button onClick= { () => this.namechange() }> Subscribe </button>
		</div>
		)
	}
}



export default Avatar;