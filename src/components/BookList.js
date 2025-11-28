import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list">
                <ul className='list-group'>
                    <li style={{ color: theme.syntax, background: theme.ui }} className='list-group-item'>
                        <h6>The Great Gatsby</h6>
                        <p>By example Auther</p>
                    </li>
                    <li style={{ color: theme.syntax, background: theme.ui }} className='list-group-item'>
                        <h6>To Kill a Mockingbird</h6>
                        <p>By example Auther</p>
                    </li>
                    <li style={{ color: theme.syntax, background: theme.ui }} className='list-group-item'>
                        <h6>1984</h6>
                        <p>By example Auther</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default BookList;