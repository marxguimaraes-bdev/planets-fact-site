import { getPlanet, getAllPlanets } from '@/repository/planets';

const mockedData = [
  {
    "name": "Tatooine",
    "overview": {
      "content": "Lorem ipsum dolor sit amet",
      "source": "acme.com"
    },
    "structure": {
      "content": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "source": "acme.com"
    },
    "geology": {
      "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      "source": "acme.com"
    },
    "rotation": "10.1 Days",
    "revolution": "43.2 Days",
    "radius": "1,234.5 KM",
    "temperature": "123°c",
    "images": {
      "planet": "/images/1.svg",
      "internal": "/images/2.svg",
      "geology": "/images/3.png"
    }
  },
];

jest.mock('@/data/planets', () => ({ getData: () => mockedData }));

describe('getPlanet', () => {
  it('returns a planet\'s data', () => {
    const result = getPlanet('tatooine');

    expect(result.name).toBe('Tatooine');
    expect(result.overview.content).toBe('Lorem ipsum dolor sit amet');
    expect(result.structure.content).toBe('consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
    expect(result.geology.content).toBe('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat');
  });

  it('returns empty data if planet is not found', () => {
    const result = getPlanet('moon');

    expect(result.name).toBe('');
    expect(result.overview.content).toBe('');
    expect(result.structure.content).toBe('');
    expect(result.geology.content).toBe('');
  });
});

describe('getAllPlanets', () => {
  it('returns all planets data', () => {
    const result = getAllPlanets();

    expect(result.length).toBe(mockedData.length);
  });
});
