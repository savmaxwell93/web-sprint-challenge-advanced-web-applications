import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
});

test('executes handleDelete when the delete button is pressed', ()=> {
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.