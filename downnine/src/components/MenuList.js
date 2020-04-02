import React, {useContext } from 'react'
import Menu from './Menu'
import { DataContext } from '../context'

const MenuList = () => {
    const {products} = useContext(DataContext)
    
        return (
            <React.Fragment>
                {
                    products.map( item =>{
                        return <Menu key={item.id} item={item}/>
                    }
                    )
                }
                {/* <Menu></Menu> */}
            </React.Fragment>
        )
    }


export default MenuList
