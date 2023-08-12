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

/* const circleColors = {
  Mercury: 'bg-[#DEF4FC]',
  Venus: 'bg-[#F7CC7F]',
  Earth: 'bg-[#545BFE]',
  Mars: 'bg-[#FF6A45]',
  Jupiter: 'bg-[#ECAD7A]',
  Saturn: 'bg-[#FCCB6B]',
  Uranus: 'bg-[#65F0D5]',
  Neptune: 'bg-[#497EFA]',
}; */

export default function NavBar({ title, items = [] }: NavBarProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={`flex flex-col ${showMenu ? 'h-full' : 'h-auto'} uppercase md:justify-between md:h-auto border-b border-white lg:flex-row`}>
      <div className="flex flex-row justify-between md:justify-around">
        <div className="font-antonio text-[28px] tracking-[-1.05px] px-6 py-4 text-start md:text-center lg:text-start">{title}</div>
        <button onClick={() => setShowMenu(!showMenu)} className="px-6 md:hidden">
          <Image src="/images/icon-hamburger.svg" alt="three bar icon" width={24} height={17} className={showMenu ? 'opacity-20' : ''} />
        </button>
      </div>
      <div className={`grid grid-cols-1 content-start h-full pr-8 pl-6 divide-y ${showMenu ? 'block' : 'hidden'} md:divide-y-0 md:flex md:gap-x-8 md:justify-around md:h-auto md:visible md:pt-0 md:my-6 lg:my-0`}>
        { items.map(({ label, href }) => (
          <div key={label}>
            <Link href={href} className="flex flex-row py-5 items-center gap-x-6 border-t-4 border-transparent hover:border-white">
              <span className="bg-white rounded-full h-5 w-5 block md:hidden"></span>
              <div className="grow font-league-spartan text-[15px] font-spartan-bold leading-heading-3 tracking-[0.08525rem]">{label}</div>
              <Image src="/images/icon-chevron.svg" alt="arrow" width={8} height={16} className="md:hidden" />
            </Link>
          </div>
        )) }
      </div>
    </nav>
  );
}
