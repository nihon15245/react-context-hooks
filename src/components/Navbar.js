import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const authStatus = isAuthenticated ? 'Logged In' : 'Logged Out';
    return (
        <nav className="navbar navbar-expand" style={{ background: theme.ui, color: theme.syntax }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: theme.syntax }}>Reading List</a>
                <div className="d-flex">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={{ color: theme.syntax }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: theme.syntax }}>Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: theme.syntax }}>Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: theme.syntax }} onClick={toggleAuth}>{authStatus}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;