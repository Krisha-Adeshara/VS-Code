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
        setEditingID(null);
    };
    
    return(
            <ul className="space-y-4 mt-6">
      {books.map((book) => (
        <li
          key={book.id}
          className="flex justify-between items-start bg-gray-100 p-4 rounded shadow"
        >
          {editingID === book.id ? (
            <div className="flex-1 space-y-2">
              <input
                className="w-full px-2 py-1 border rounded"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Title"
              />
              <input
                className="w-full px-2 py-1 border rounded"
                value={editAuthor}
                onChange={(e) => setEditAuthor(e.target.value)}
                placeholder="Author"
              />
              <div className="mt-2 space-x-2">
                <button
                  onClick={saveEdit}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingID(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1">
                <p className="text-lg font-semibold">{book.title}</p>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(book)}
                  className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(book.id)}
                  className="bg-black-500 text-black px-3 py-1 rounded hover:bg-red-300"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
    );
}

export default BookList;