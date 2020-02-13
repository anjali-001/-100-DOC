import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        const {name, dept} = this.props
    return( 
    <h1>
        Welcome {name} a.k.a {dept}
    </h1>
    )
    }
}

export default Welcome