import React, { useState } from 'react';
import styles from './AddBook.module.scss';

const AddBook = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [bookGenre, setBookGenre] = useState('');
    const [bookImageLink, setBookImageLink] = useState('');
    const [bookDescription, setBookDescription] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        // handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className={styles['add-book-form']}>
            <label htmlFor="bookTitle">Book Title:</label>
            <input
                type="text"
                id="bookTitle"
                value={bookTitle}
                onChange={(event) => setBookTitle(event.target.value)}
            />

            <label htmlFor="bookGenre">Genres:</label>
            <input
                type="text"
                id="bookGenre"
                value={bookGenre}
                onChange={(event) => setBookGenre(event.target.value)}
            />

            <label htmlFor="bookImageLink">Book Photo Link:</label>
            <input
                type="text"
                id="bookImageLink"
                value={bookImageLink}
                onChange={(event) => setBookImageLink(event.target.value)}
            />

            <label htmlFor="bookDescription">Book Description:</label>
            <textarea
                id="bookDescription"
                value={bookDescription}
                onChange={(event) => setBookDescription(event.target.value)}
            />

            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;