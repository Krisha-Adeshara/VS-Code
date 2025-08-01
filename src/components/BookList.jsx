import { useState } from "react";

function BookList({books, onDelete, onUpdate}){
    const [editingID, setEditingID] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editAuthor, setEditAuthor] = useState('');

    const startEdit = (book) => {
        setEditingID(book.id);
        setEditTitle(book.title);
        setEditAuthor(book.author);
    };

    const saveEdit = () => {
        onUpdate({id: editingID, title: editTitle, author: editAuthor});
    };
    
    return(
        <ul>
            {books.map((book) => (
                <li key={book.id} style={{marginBottom: '0.5rem'}}>
                    {editingID === book.id ? (
                        <>
                        <input 
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}/>
                        <input 
                        value={editAuthor}
                        onChange={(e) => setEditAuthor(e.target.value)}/>
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={() => setEditingID(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                        <strong>{book.title}</strong> by {book.author}
                        <button onClick={() => startEdit(book)}>Edit</button>
                        <button onClick={() => onDelete(book.id)}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default BookList;