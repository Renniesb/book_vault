import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/';
import Content from './Content'; // Import the Content component

describe('Content Component', () => {
  // Mock the necessary props and data for testing
  const props = {
    allContent: [], // Provide sample data here
    checkedGenres: [],
    checkedYears: [],
    contentTypeSelected: '',
    searchTerm: '',
  };

  it('renders without errors', () => {
    render(<Content {...props} />);
  });

  it('renders the correct message when no content is available', () => {
    const { getByText } = render(<Content {...props} />);
    expect(getByText(/No Matching Results/)).toBeInTheDocument();
  });

  // Add more tests for props, filtering, conditional rendering, mapping, image rendering, content text, etc.
});
