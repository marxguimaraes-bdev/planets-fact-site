import NavBar from '@/components/nav-bar'
import data from '@/data/data.json';
import Card from '@/components/card';
import Content from '@/components/content';

const planets = data.map(({ name }) => ({ label: name, href: `/${name}`}));

const getPlanetData = (planet: string) => data.find(p => p.name.toLowerCase() === planet.toLowerCase());

type PlanetPageProps = {
  planet?: string;
};

export default function PlanetPage({ planet = 'mercury' }: PlanetPageProps) {
  const pData = getPlanetData(planet);

  const tabs = [
    { title: { small: 'Overview', normal: 'Overview' }, image: { path: pData?.images?.planet, alt: "Planet image"}, content: pData?.overview?.content, source: pData?.overview?.source },
    { title: { small: 'Structure', normal: 'Internal structure' }, image: { path: pData?.images?.internal, alt: "Planet c section"}, content: pData?.structure?.content, source: pData?.structure?.source },
    { title: { small: 'Geology', normal: 'Surface geology' }, image: { path: pData?.images?.planet, alt: "Planet image"}, hoverImage: { path: pData?.images?.geology, alt: "Planet geology"}, content: pData?.geology?.content, source: pData?.geology?.source },
  ];

  return (
    <div className="flex flex-col justify-stretch min-h-full bg-stars bg-black-russian">
      <NavBar title="The Planets" items={planets} />
      <Content planet={pData?.name} tabs={tabs} />
      <footer className="flex flex-col gap-y-2 mx-6 my-12 md:flex-row gap-x-3 md:mx-[2.44rem] lg:mx-[10.3rem]">
        <Card title="Rotation time">{pData?.rotation}</Card>
        <Card title="Revolution time">{pData?.revolution}</Card>
        <Card title="Radius">{pData?.radius}</Card>
        <Card title="Average temp.">{pData?.temperature}</Card>
      </footer>
    </div>
  )
}
