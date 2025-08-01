import { useState, useEffect } from 'react'
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  }

  const deleteBook = (id) =>{
    setBooks(books.filter((b) => b.id !== id));
  }

  const updateBook = (updatedBook)=>{
    setBooks(books.map((b) => (b.id === updateBook.id ? updateBook : b)));
  }

  return (
    <div style={{maxWidth: 600, margin: '2 rem auto'}}>
      <h1>BookTrack</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook}/>

    </div>
  );
}

export default App
