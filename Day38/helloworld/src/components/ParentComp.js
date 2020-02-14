import React, { Compotent, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Anjali'
        }
    }

    componentDidMount() {
        setInterval(() => {
        this.setState({
            name:'Anjali'
        })
        }, 2000)
        }
    
    render() {
        console.log('**************************Parent Comp render******************')
        return (
            <div>
              Parent Component  
              <MemoComp name={this.state.name}/>
              {/* <RegComp name={this.state.name}></RegComp>
              <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
