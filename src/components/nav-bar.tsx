'use client';

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

type NavBarProps = {
  title: string;
  items?: {
    label: string;
    href: string;
  }[];
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

export default function NavBar({ title, items = [] }: NavBarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={
        `z-10 flex flex-col ${showMenu ? 'h-full block fixed bg-stars bg-black-russian w-full' : 'h-auto'}
        uppercase border-b border-white/20 md:justify-between md:h-auto lg:flex-row`
      }>
      <div className="flex flex-row justify-between md:justify-around">
        <div className="font-antonio text-[28px] tracking-[-1.05px] px-6 py-4 text-start md:text-center lg:text-start">{title}</div>
        <button onClick={toggleMenu} className="px-6 md:hidden">
          <Image src="/images/icon-hamburger.svg" alt="three bar icon" width={24} height={17} className={showMenu ? 'opacity-20' : ''} />
        </button>
      </div>
      <div
        role="menu"
        className={
          `${showMenu ? 'w-full px-6 border-t border-white/20' : 'w-0'} transition-[width] ease-linear duration-200 fixed
          flex flex-col mt-[4.7rem] overflow-x-hidden h-full bg-black-russian
          max-md:divide-y max-md:divide-white/20 md:relative md:bg-transparent md:flex md:flex-row md:w-auto md:gap-x-8
          md:justify-around md:h-auto md:w-auto md:pt-0 md:my-6 lg:my-0 md:mx-12 lg:mx-10`
        }>
        { items.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            role="menuitem"
            className={`flex flex-row py-5 items-center gap-x-6 border-t-4 border-transparent ${hoverClassNames[label]}`}>
            <span className={`${circleColors[label]} rounded-full h-5 w-5 block md:hidden`}></span>
            <div className="grow font-league-spartan text-[15px] font-spartan-bold leading-heading-3 tracking-[0.08525rem]">{label}</div>
            <Image src="/images/icon-chevron.svg" alt="arrow" width={8} height={16} className="md:hidden" />
          </Link>
        )) }
      </div>
    </nav>
  );
}
