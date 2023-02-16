import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('should first', () => {
    render(<Sidebar />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
