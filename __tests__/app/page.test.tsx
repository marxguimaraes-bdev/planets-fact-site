import { render, screen, within } from '@testing-library/react';
import IndexPage from '@/app/page';

describe('IndexPage', () => {
  it('renders the earth page', () => {
    render(<IndexPage />);

    const main = screen.getByRole('main');
    const title = within(main).getByText(/Earth/, { selector: 'h1' });

    expect(title).toBeInTheDocument();
  });
});
