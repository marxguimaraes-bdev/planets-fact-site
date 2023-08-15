import { getData } from '@/data/planets';

type Planet = {
  name: string;
  overview: {
    content: string;
    source: string;
  },
  structure: {
    content: string;
    source: string;
  },
  geology: {
    content: string;
    source: string;
  },
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  }
}

const transform = (planetData: any): Planet => {
  return {
    name: planetData?.name ?? '',
    overview: {
      content: planetData?.overview?.content ?? '',
      source: planetData?.overview?.source ?? '',
    },
    structure: {
      content: planetData?.structure?.content ?? '',
      source: planetData?.structure?.source ?? '',
    },
    geology: {
      content: planetData?.geology?.content ?? '',
      source: planetData?.geology?.source ?? '',
    },
    rotation: planetData?.rotation ?? '',
    revolution: planetData?.revolution ?? '',
    radius: planetData?.radius ?? '',
    temperature: planetData?.temperature ?? '',
    images: {
      planet: planetData?.images?.planet ?? '',
      internal: planetData?.images?.internal ?? '',
      geology: planetData?.images?.geology ?? '',
    }
  }
};

export const getPlanet = (planetName: string): Planet => {
  return transform(getData().find(({ name }) => name.toLowerCase() === planetName.toLocaleLowerCase()));
};

export const getAllPlanets = () => getData().map(transform);
