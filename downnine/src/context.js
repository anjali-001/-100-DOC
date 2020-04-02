import React, {Component, createContext} from 'react';
import {menuItems, detailProduct} from './data';


export const DataContext = createContext();

class DataContextProvider extends Component {
    state = {
        products:[...menuItems],
        detailProduct: detailProduct
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


render(){
    return(
        <DataContext.Provider value = {{...this.state, handleDetail:this.handleDetail}}>
            {this.props.children}
        </DataContext.Provider>
    )
}
}

export default DataContextProvider;