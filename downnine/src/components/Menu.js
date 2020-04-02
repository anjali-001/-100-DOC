import React, {Component,useContext} from 'react';
import {DataContext} from '../context';
import {Link} from 'react-router-dom';

const Menu = ({item}) => {
    const {handleDetail} = useContext(DataContext);
    const {id,img,price,title} = item
    return (
    <div className="container">
        <div className="row">
            <div className="card">
                        <div className="img-container p-5" onClick={()=>handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt='cocktail' className="card-img-top"/>
                            </Link>
                        </div>
            </div>
        </div>
        
    </div>
    )
}

export default Menu
// import React ,{useContext} from 'react'
// import {DataContext} from '../context'
// function Menu() {
//     const {hello} = useContext(DataContext);
//     const res=hello?"hi":"hello"
//     return (
// <div>{console.log(res)}</div>
        
//     )
// }

// export default Menu

