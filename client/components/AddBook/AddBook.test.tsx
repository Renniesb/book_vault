import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddBook from './AddBook';

describe('AddBook', () => {
    it('should render the form fields', () => {
        const { getByLabelText } = render(<AddBook />);

        expect(getByLabelText('Book Title:')).toBeInTheDocument();
        expect(getByLabelText('Genres:')).toBeInTheDocument();
        expect(getByLabelText('Book Photo Link:')).toBeInTheDocument();
        expect(getByLabelText('Book Description:')).toBeInTheDocument();
    });

    it('should update the form fields when the user types', () => {
        const { getByLabelText } = render(<AddBook />);

        fireEvent.change(getByLabelText('Book Title:'), {
            target: { value: 'The Great Gatsby' },
        });
        fireEvent.change(getByLabelText('Genres:'), {
            target: { value: 'Fiction' },
        });
        fireEvent.change(getByLabelText('Book Photo Link:'), {
            target: { value: 'https://example.com/book.jpg' },
        });
        fireEvent.change(getByLabelText('Book Description:'), {
            target: { value: 'A classic novel about the American Dream' },
        });

        expect(getByLabelText('Book Title:')).toHaveValue('The Great Gatsby');
        expect(getByLabelText('Genres:')).toHaveValue('Fiction');
        expect(getByLabelText('Book Photo Link:')).toHaveValue(
            'https://example.com/book.jpg'
        );
        expect(getByLabelText('Book Description:')).toHaveValue(
            'A classic novel about the American Dream'
        );
    });

    it('should call the onSubmit function when the form is submitted', () => {
        const handleSubmit = jest.fn();
        const { container } = render(<AddBook />);

        // Locate the form by class name
        const form = container.querySelector('.add-book-form');

        // Simulate form submission
        if(form){
            fireEvent.submit(form);
        }

        // Assert that the internal submit handler was called
        expect(handleSubmit).toHaveBeenCalled();
    });
});