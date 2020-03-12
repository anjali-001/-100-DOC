import React, {useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme? light : dark;
    
    return ( 
        <nav style={{ background: theme.ui, color: theme.syntax}}>
                    <h1>Book List App</h1>
                    <div onClick={toggleAuth}>
                        { isAuthenticated ?'Logged In' : 'Logged Out'}
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    </nav>
     );
}
 
export default Navbar;


