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
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  }

  return (
    <div style={{margin:'20px'}}>
      <p class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-5xl font-extrabold text-transparent ...">
        Book Tracker
    </p>
    <BookForm onAdd={addBook} />
    <div className="max-w-xl mx-auto mt-10">
      
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook}/>
    </div>
      

    </div>
  );
}

export default App
