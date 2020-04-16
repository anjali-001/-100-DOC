import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import { DisplayContext } from '../DisplayContext';

function Buttons(){
    const {resetGame} = useContext(DisplayContext); 
    
        return(
            <React.Fragment>
                <button className="btn" onClick={()=>resetGame()}>
                <Link to="/" > Click for Normal</Link>
                </button>
                <button className="btn" onClick={()=>resetGame()}>
                <Link to="/plus"> Click For +1</Link>
                </button>
                <button className="btn" onClick={()=>resetGame()}>
                <Link to="/minus"> Click For -1</Link>
                </button>

            </React.Fragment>
        )
    
}
export default Buttons;

