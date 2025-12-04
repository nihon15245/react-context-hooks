import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button className="btn btn-primary" onClick={toggleTheme}>Toggle Theme</button>
    )
}

export default ThemeToggle; 