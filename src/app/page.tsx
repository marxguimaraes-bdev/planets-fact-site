import NavBar from '@/components/nav-bar'
import Image from 'next/image'
import data from '@/data/data.json';

const planets = data.map(({ name }) => ({ label: name, href: `/${name}`}));

export default function Home() {
  return (
    <div className="w-full h-full bg-stars bg-black-russian">
      <NavBar title="The Planets" items={planets} />
    </div>
  )
}
