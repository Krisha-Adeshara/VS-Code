import {render, screen, fireEvent} from '@testing-library/react';
import BookList from '../components/BookList';
import {vi} from 'vitest';

describe('BookList Component', () => {
    const mockBooks = [
        {id: 1, title: 'Atomic Habits', author: 'James Clear'},
        {id: 2, title: 'The Book Thief', author: 'Markus Zusak'},
    ];
    const mockDeleteBook = vi.fn();
    const mockUpdateBook = vi.fn();

    test('renders book correctly', () => {
        render(<BookList books={mockBooks} onDelete={mockDeleteBook} onUpdate={mockUpdateBook} />);
        expect(screen.getByText('Atomic Habits')).toBeInTheDocument();
        expect(screen.getByText((content) => content.includes('Markus Zusak'))).toBeInTheDocument();
    });
    test('calls OnDelete with correct book ID', () => {
        render(<BookList books={mockBooks} onDelete={mockDeleteBook} onUpdate={mockUpdateBook} />);
        fireEvent.click(screen.getAllByText('Delete')[0]);
        expect(mockDeleteBook).toHaveBeenCalledWith(1);
    });

    test('enters edit mode and updates a book', () =>{
        render(<BookList books={mockBooks} onDelete={mockDeleteBook} onUpdate={mockUpdateBook} />);
        //click edit for the first book
        fireEvent.click(screen.getAllByText('Edit')[0]);
        const titleInput = screen.getByDisplayValue('Atomic Habits');
        const authorInput = screen.getByDisplayValue('James Clear');
        
        //change the title and author
        fireEvent.change(titleInput, {target: {value: 'New Title'}});
        fireEvent.change(authorInput, {target: {value: 'New Author'}});
        fireEvent.click(screen.getByText('Save'));
        expect(mockUpdateBook).toHaveBeenCalledWith({
            id: 1,
            title: 'New Title',
            author: 'New Author'
        });
    });
});