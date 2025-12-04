import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);
    return (
        < div className="book-list" >
            <ul className='list-group'>
                {books.map(book => {
                    console.log(book);
                    return (
                        <li key={book.id} style={{ color: theme.syntax, background: theme.ui }} className='list-group-item'>
                            <h6>{book.title}</h6>
                            <p>{book.auther}</p>
                        </li>
                    )
                })}
            </ul>
        </div >
    );
}

export default BookList;
