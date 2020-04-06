import React, {Component, createContext} from 'react';
import {menuItems, detailProduct} from './data';


export const DataContext = createContext();

class DataContextProvider extends Component {
    state = {
        products:[...menuItems],
        detailProduct: detailProduct,
        num:null,
        randomTitle:null
    }


showItems =(id)=> {
    const item = this.state.products.find(item=>item.id===id)
    return item;
}

handleDetail = (id) => {
    const item = this.showItems(id);
    this.setState(()=>{
        return {
            detailProduct:item
        }
    })
}
generateNum = () => {
    const num = Math.floor(Math.random()*9)+1;
    // this.setState(()=>{
    //     return{
    //         num:num
    //     }
    // })
    return num
}


generateTitle = () => {
    
    const number = this.generateNum();
    const item = this.showItems(number)
    this.setState(()=>{
        return{
            randomTitle:item.title
        }
    })
} 


render(){
    return(
        <DataContext.Provider value = {{...this.state, handleDetail:this.handleDetail, generateNum:this.generateNum, generateTitle:this.generateTitle}}>
            {this.props.children}
        </DataContext.Provider>
    )
}
}

export default DataContextProvider;
