import NavBar from '@/components/nav-bar'
import Card from '@/components/card';
import Content from '@/components/content';
import { getPlanet, getAllPlanets } from '@/repository/planets';

const planetNames = getAllPlanets().map(({ name }) => (name));

type PlanetPageProps = {
  params: {
    planet: string;
  };
};

export default function PlanetPage({ params: { planet } }: PlanetPageProps) {
  const planetData = getPlanet(planet);

  const tabs = [
    { title: { small: 'Overview', normal: 'Overview' }, image: { path: planetData.images.planet, alt: "Planet surface"}, content: planetData.overview.content, source: planetData.overview.source },
    { title: { small: 'Structure', normal: 'Internal structure' }, image: { path: planetData.images.internal, alt: "Planet core"}, content: planetData.structure.content, source: planetData.structure.source },
    { title: { small: 'Geology', normal: 'Surface geology' }, image: { path: planetData.images.planet, alt: "Planet surface"}, hoverImage: { path: planetData.images.geology, alt: "Planet geology"}, content: planetData.geology.content, source: planetData.geology.source },
  ];

  return (
    <div className="flex flex-col justify-stretch min-h-full bg-stars bg-black-russian">
      <NavBar title="The Planets" items={planetNames} />
      <div className="border-t border-white/20 w-full"/>
      <Content planet={planetData.name} tabs={tabs} />
      <footer className="flex flex-col gap-y-2 mx-6 mt-[1.75rem] md:mt-[1.6875rem] lg:mt-[5.4375rem] mb-[2.9375rem] md:mb-[36px] lg:mb-[56px] md:flex-row md:gap-x-[0.6875rem] lg:gap-x-[1.875rem] md:mx-[2.44rem] lg:w-full lg:max-w-[90rem] lg:px-[10.3125rem] lg:mx-auto">
        <Card title="Rotation time">{planetData.rotation}</Card>
        <Card title="Revolution time">{planetData.revolution}</Card>
        <Card title="Radius">{planetData.radius}</Card>
        <Card title="Average temp.">{planetData.temperature}</Card>
      </footer>
    </div>
  )
}
