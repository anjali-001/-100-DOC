import React, {useContext} from 'react';
import {DisplayContext} from '../DisplayContext';

const Display = () => {
    const {arr,calledOut,generateNum,randomNum} = useContext(DisplayContext);
    return ( 
        <React.Fragment>
            <div className="row">
            {arr.map(item=>{
                return (

                <div key={item} className={calledOut.includes(item)?"found col-1":"notfound col-1"}>{item}</div>
                
                
            )
            })}
            </div>
            <button onClick={()=>generateNum()}>generate num</button>
            <h3>{randomNum}</h3>
            </React.Fragment>
     );
}
 
export default Display;