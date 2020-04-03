import React, {useContext} from 'react'
import { DataContext } from '../context';
import {Link} from 'react-router-dom'


const Details = () => {
    const {detailProduct} = useContext(DataContext);
    const {id, title, img, price,info} = detailProduct
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Details;