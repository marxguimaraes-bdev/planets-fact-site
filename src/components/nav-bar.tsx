'use client';

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

type NavBarProps = {
  title: string;
  items: string[];
};

const circleColors: any = {
  Mercury: 'bg-[#DEF4FC]',
  Venus: 'bg-[#F7CC7F]',
  Earth: 'bg-[#545BFE]',
  Mars: 'bg-[#FF6A45]',
  Jupiter: 'bg-[#ECAD7A]',
  Saturn: 'bg-[#FCCB6B]',
  Uranus: 'bg-[#65F0D5]',
  Neptune: 'bg-[#497EFA]',
};

const hoverClassNames: any = {
  Mercury: 'hover:border-mercury',
  Venus: 'hover:border-venus',
  Earth: 'hover:border-earth',
  Mars: 'hover:border-mars',
  Jupiter: 'hover:border-jupiter',
  Saturn: 'hover:border-saturn',
  Uranus: 'hover:border-uranus',
  Neptune: 'hover:border-neptune',
};

export default function NavBar({ title, items }: NavBarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={
      `z-10 flex flex-col uppercase border-b border-white/20 md:justify-between lg:flex-row
      ${showMenu ? 'h-full block fixed bg-stars bg-black-russian w-full' : 'h-auto'}`
    }>
      <div className="flex flex-row justify-between px-6 py-4 lg:px-0 md:py-8 md:justify-around">
        <div className="font-antonio text-[1.75rem] tracking-[-0.0656rem] md:leading-none text-start md:text-center lg:text-start lg:mx-8">{title}</div>
        <button onClick={toggleMenu} className="md:hidden">
          <Image src="/images/icon-hamburger.svg" alt="three bar icon" width={24} height={17} className={showMenu ? 'opacity-20' : ''} />
        </button>
      </div>
      <div
        role="menu"
        className={
          `${showMenu ? 'w-full px-6' : 'w-0'} border-t md:border-0 border-white/20 pt-[1.25rem] md:pt-0 transition-[width] ease-linear duration-300 fixed
          flex flex-col mt-[4.7rem] overflow-x-hidden h-full bg-black-russian
          max-md:divide-y max-md:divide-white/20
          md:relative md:bg-transparent md:flex md:flex-row md:items-center md:w-auto md:gap-x-[2.0625rem] md:justify-around md:h-auto md:mt-[0.4375rem] lg:my-0 md:mx-12
          lg:mx-10`
        }>
        { items.map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            role="menuitem"
            className={`font-spartan flex flex-row pt-5 pb-5 md:pt-0 md:pb-[1.6875rem] lg:pb-0 box-border items-center gap-x-6 border-t-4 border-transparent lg:h-full lg:transition-[border] lg:duration-300 lg:ease-linear ${hoverClassNames[item]}`}>
            <span className={`${circleColors[item]} rounded-full h-5 w-5 block md:hidden`}></span>
            <div className={`grow font-league-spartan text-[0.9375rem] font-spartan-bold leading-heading-3 tracking-[0.085rem] md:text-heading-4 md:leading-heading-3 md:tracking-heading-4`}>
              {item}
            </div>
            <Image src="/images/icon-chevron.svg" alt="arrow" width={8} height={16} className="md:hidden" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
