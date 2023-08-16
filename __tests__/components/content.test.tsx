import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Content from '@/components/content';
import { PlanetT } from '@/app/enums/planet';

const mockTabs = [
  {
    title: {
      small: 'Foo',
      normal: 'Bar',
    },
    content: 'Lorem ipsum',
    source: 'acme.com',
    image: {
      path: '/path/to/image.svg',
      alt: 'Some image',
    },
  },
  {
    title: {
      small: 'Boo',
      normal: 'Far',
    },
    content: 'dolor sit amet',
    source: 'acme.ca',
    image: {
      path: '/another/image.svg',
      alt: 'Another image',
    },
  }
]

describe('Content', () => {
  it('renders the title', () => {
    render(<Content planet={'Tatooine' as keyof PlanetT} tabs={mockTabs} />);

    const title = screen.getByText(/Tatooine/);
    expect(title).toBeInTheDocument();
  });

  describe('Default tab', () => {
    it('renders the tab title, information and source', () => {
      render(<Content planet={'Tatooine' as keyof PlanetT} tabs={mockTabs} />);
  
      const title = screen.getByText(/Bar/);
      const content = screen.getByText(/Lorem ipsum/);
      const source = within(screen.getByText(/Source:/)).getByRole('link');
  
      expect(title).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(source).toHaveAttribute('href', 'acme.com');
    });
  
    it('renders the image', () => {
      render(<Content planet={'Tatooine' as keyof PlanetT} tabs={mockTabs} />);
  
      const image = screen.getByAltText(/Some image/);
      expect(image).toHaveAttribute('src', '/path/to/image.svg');
    });
  });

  describe('Other tabs', () => {
    it('renders the tab title, information and source', async () => {
      render(<Content planet={'Tatooine' as keyof PlanetT} tabs={mockTabs} />);

      const button = screen.getByRole('tab', { name: /Far/ });
      await userEvent.click(button);
  
      const title = screen.getByText(/Far/, { selector: 'span' });
      const content = screen.getByText(/dolor sit amet/);
      const source = within(screen.getByText(/Source:/)).getByRole('link');
  
      expect(title).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(source).toHaveAttribute('href', 'acme.ca');
    });

    it('renders the image', async () => {
      render(<Content planet={'Tatooine' as keyof PlanetT} tabs={mockTabs} />);

      const button = screen.getByRole('tab', { name: /Far/ });
      await userEvent.click(button);
  
      const image = screen.getByAltText(/Another image/);
      expect(image).toHaveAttribute('src', '/another/image.svg');
    });
  });
});
