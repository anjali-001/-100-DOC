import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';


const Booklist = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme? light : dark;
    return ( 
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>Sita: Warrior if Mithila</li>
                    <li style={{background: theme.ui}}>Murakaami</li>
                    <li style={{background: theme.ui}}>1984</li>
                </ul>
            </div>
     );
}
 
export default Booklist;


