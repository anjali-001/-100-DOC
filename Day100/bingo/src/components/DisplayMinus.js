import React, {useContext} from 'react';
import {DisplayContext} from '../DisplayContext';


const DisplayMinus = () => {
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
            <h3>{randomNum==90?"1":randomNum+1}</h3>
            </React.Fragment>
     );
}
 
export default DisplayMinus;