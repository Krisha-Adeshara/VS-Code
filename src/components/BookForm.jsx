import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function BookForm({onAdd}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author) return;

        onAdd({id: uuidv4(), title, author})
        setTitle('')
        setAuthor('')
    };

    return (
        <form onSubmit={handleSubmit} style={{marginBottom: '1rem'}}>
            <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} required />

            <input 
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} required/>

            <button type="submit">Add Book</button>

        </form>
    );
}

export default BookForm;