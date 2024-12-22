import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectTable from './ProjectTable';
import { Constant } from '../constant/constant';
import useApiCall from '../hooks/useApiCall';

jest.mock('../hooks/useApiCall', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mocking the Pagination component
jest.mock('./Pagination', () => ({
  __esModule: true,
  default: ({ nextPage, prevPage, goToPage, currentPage, totalPages }) => (
    <div>
      <button onClick={nextPage}>Next</button>
      <button onClick={prevPage}>Previous</button>
      <button onClick={() => goToPage(1)}>Go to Page 1</button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
    </div>
  ),
}));

describe('ProjectTable', () => {
  const mockData = [
    { "s.no": 1, "percentage.funded": 30, "amt.pledged": 5000 },
    { "s.no": 2, "percentage.funded": 50, "amt.pledged": 10000 },
    { "s.no": 3, "percentage.funded": 10, "amt.pledged": 2000 },
  ];


  it('rendering the table and loading state', () => {
    useApiCall.mockReturnValue({ data: [], loading: true, error: null });
    render(<ProjectTable />);
    expect(screen.getByText(Constant.LOADING)).toBeInTheDocument();
  });

  it('rendering the table and handles error state', () => {
    useApiCall.mockReturnValue({ data: [], loading: false, error: Constant.ERROR_MESSAGE });
    render(<ProjectTable />);
    expect(screen.getByText(Constant.ERROR_MESSAGE)).toBeInTheDocument();
  });

  it('rendering the table with data', async () => {
    useApiCall.mockReturnValue({ data: mockData, loading: false, error: null });
    render(<ProjectTable />);
    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('110%$2,000');
  });

  it('handles pagination', () => {
    useApiCall.mockReturnValue({ data: mockData, loading: false, error: null });
    render(<ProjectTable />);
    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    const prevButton = screen.getByText('Previous');
    fireEvent.click(prevButton);
    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
  });
});



