import { render, screen, within } from '@testing-library/react';
import IndexPage from '@/app/page';

describe('IndexPage', () => {
  it('renders the navigation bar', () => {
    render(<IndexPage />);

    const nav = screen.getByText(/The Planets/);
    expect(nav).toBeInTheDocument();
  });

  it('renders all the planets', () => {
    render(<IndexPage />);

    const planets = [
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune'
    ];

    planets.forEach((planet) => {
      const navBar = screen.getByRole('navigation');
      const element = within(navBar).getByText(planet);
      expect(element).toBeInTheDocument();
    });
  });
});
