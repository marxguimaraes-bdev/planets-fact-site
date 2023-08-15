import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NavBar from '@/components/nav-bar';

describe('NavBar', () => {
  it('renders the title!', () => {
    render(<NavBar title="Awesome navigation" />);

    const title = screen.getByText(/Awesome navigation/);
    expect(title).toBeInTheDocument();
  });

  it('render items with links', () => {
    const items = [
      { label: 'First', href: '/first' },
      { label: 'Second', href: '/second/index' }
    ];

    render(<NavBar title="Awesome navigation" items={items} />);

    const first = screen.getByText(/First/);
    const second = screen.getByText(/Second/);

    expect(first).toBeInTheDocument();
    expect(first.closest('a')).toHaveAttribute('href', '/first');
    expect(second).toBeInTheDocument();
    expect(second.closest('a')).toHaveAttribute('href', '/second/index');
  });

  it('renders menu when button is pressed', async () => {
    const items = [
      { label: 'First', href: '/first' },
      { label: 'Second', href: '/second/index' }
    ];

    render(<NavBar title="Awesome navigation" items={items} />);

    const menuButton = screen.getByRole('menu');
    await userEvent.click(menuButton);

    const first = screen.getByText(/First/);
    const second = screen.getByText(/Second/);

    expect(first).toBeInTheDocument();
    expect(first.closest('a')).toHaveAttribute('href', '/first');
    expect(second).toBeInTheDocument();
    expect(second.closest('a')).toHaveAttribute('href', '/second/index');
  });
});
