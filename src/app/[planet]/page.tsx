import NavBar from '@/components/nav-bar'
import Card from '@/components/card';
import Content from '@/components/content';
import { getPlanet, getAllPlanets } from '@/repository/planets';

const planets = getAllPlanets().map(({ name }) => ({ label: name, href: `/${name}`}));

type PlanetPageProps = {
  params: {
    planet: string;
  };
};

export default function PlanetPage({ params: { planet } }: PlanetPageProps) {
  const planetData = getPlanet(planet);

  const tabs = [
    { title: { small: 'Overview', normal: 'Overview' }, image: { path: planetData.images.planet, alt: "Planet image"}, content: planetData.overview.content, source: planetData.overview.source },
    { title: { small: 'Structure', normal: 'Internal structure' }, image: { path: planetData.images.internal, alt: "Planet c section"}, content: planetData.structure.content, source: planetData.structure.source },
    { title: { small: 'Geology', normal: 'Surface geology' }, image: { path: planetData.images.planet, alt: "Planet image"}, hoverImage: { path: planetData.images.geology, alt: "Planet geology"}, content: planetData.geology.content, source: planetData.geology.source },
  ];

  return (
    <div className="flex flex-col justify-stretch min-h-full bg-stars bg-black-russian">
      <NavBar title="The Planets" items={planets} />
      <Content planet={planetData.name} tabs={tabs} />
      <footer className="flex flex-col gap-y-2 mx-6 my-12 md:flex-row gap-x-3 md:mx-[2.44rem] lg:mx-[10.3rem]">
        <Card title="Rotation time">{planetData.rotation}</Card>
        <Card title="Revolution time">{planetData.revolution}</Card>
        <Card title="Radius">{planetData.radius}</Card>
        <Card title="Average temp.">{planetData.temperature}</Card>
      </footer>
    </div>
  )
}
