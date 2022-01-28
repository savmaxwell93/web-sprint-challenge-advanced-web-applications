import React from 'react';
import '@testing-library/jest-dom';
import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 1,
    headline: 'Headline',
    author: 'Author',
    summary: 'Summary',
    body: 'Body'
}
const testArticleNoAuthor = {
    id: 1,
    headline: 'Headline',
    author: '',
    summary: 'Summary',
    body: 'Body'
}

test('renders component without errors', ()=> {
    render(<Article article={{}}/>)
});

test('renders headline, author, summary and body from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    const headline = screen.getByTestId(/headline/i);
    const author = screen.getByTestId(/author/i);
    const summary = screen.getByTestId(/summary/i);
    const body = screen.getByTestId(/body/i);
    expect(headline).toBeInTheDocument();
    expect(headline).toHaveTextContent(/headline/i);
    expect(author).toBeInTheDocument();
    expect(author).toHaveTextContent(/author/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent(/summary/i);
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent(/body/i);
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticleNoAuthor}/>)
    const author = screen.getByTestId(/author/i);
    expect(author).toHaveTextContent(/associated press/i);
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const mockHandleDelete = jest.fn();
    render(<Article article={testArticle} handleDelete={mockHandleDelete} />);
    const deleteButton = screen.getByTestId('deleteButton');
    userEvent.click(deleteButton);
    expect(mockHandleDelete).toHaveBeenCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.