import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className="book-list">
                <ul className='list-group'>
                    <li className='list-group-item'>The Great Gatsby</li>
                    <li className='list-group-item'>To Kill a Mockingbird</li>
                    <li className='list-group-item'>1984</li>
                </ul>
            </div>
        );
    }
}

export default BookList;