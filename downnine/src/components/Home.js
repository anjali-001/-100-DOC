import React, { useContext } from 'react';
import {ButtonContainer} from './Button';
import {DataContext} from '../context';

const Home = () => {
    const {products,generateNum,num} = useContext(DataContext);
    const {id} = products
    
    return ( 
        <div>
                <h4>Having trouble deciding your drink? Let your fate choose for you.</h4>
                <p>Click below to see what's your cocktail.</p>
                <ButtonContainer onClick={()=>generateNum()}>click{num}</ButtonContainer>
                {()=>{
                    {id}
                }}

                
            </div>
     );
}
 
export default Home;
