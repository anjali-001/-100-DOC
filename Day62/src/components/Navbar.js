import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext
    render() {
        console.log(this.context);
        const { isLigthTheme, light, dark} = this.context;
        const theme = isLigthTheme? light : dark;
        return (
            <nav style={{ background: theme.ui, color: theme.syntax}}>
                <h1>Book List App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
