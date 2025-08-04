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
        <form onSubmit={handleSubmit} style={{margin: '20px'}}>
            <input
            type="text"
            placeholder="Book Title"
            class="w-40% px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)} required />

            <input 
            type="text"
            placeholder="Author"
            class="w-40% px-3 py-2 mx-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} required/>

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Book</button>

        </form>
    );
}

export default BookForm;