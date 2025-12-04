import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: "This is example books", auther: "Example Auther", id: 1 },
        { title: "This is example books", auther: "Example Auther", id: 2 },
        { title: "This is example books", auther: "Example Auther", id: 3 }
    ]);

    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;