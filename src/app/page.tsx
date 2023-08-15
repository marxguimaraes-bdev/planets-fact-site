import PlanetPage from '@/app/[planet]/page';

export default function IndexPage() {
  return (
    <PlanetPage params={{ planet: 'earth' }} />
  )
}
