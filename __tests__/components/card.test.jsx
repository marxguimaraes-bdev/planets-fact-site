import { render, screen } from '@testing-library/react';
import Card from '@/components/card';

describe('Card', () => {
  it('renders the title', () => {
    render(<Card title="Piece of info" />);

    const title = screen.getByText(/Piece of info/);
    expect(title).toBeInTheDocument();
  });

  it('renders the content', () => {
    render(<Card title="Piece of info">Detailed information about something</Card>);

    const content = screen.getByText(/Detailed information about something/);
    expect(content).toBeInTheDocument();
  });
});
