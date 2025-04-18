'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PlanetT } from "@/app/enums/planet";

type Tab = {
  title: {
    small: string;
    normal: string;
  },
  content: string;
  source: string;
  image: {
    path: string;
    alt: string;
  }
  hoverImage?: {
    path: string;
    alt: string;
  }
};

type ContentProps = {
  planet: keyof PlanetT;
  tabs: Tab[];
};

const buttonClassNames: PlanetT = {
  Mercury: 'border-mercury md:border-transparent md:bg-mercury',
  Venus: 'border-venus md:border-transparent md:bg-venus',
  Earth: 'border-earth md:border-transparent md:bg-earth',
  Mars: 'border-mars md:border-transparent md:bg-mars',
  Jupiter: 'border-jupiter md:border-transparent md:bg-jupiter',
  Saturn: 'border-saturn md:border-transparent md:bg-saturn',
  Uranus: 'border-uranus md:border-transparent md:bg-uranus',
  Neptune: 'border-neptune md:border-transparent md:bg-neptune',
};

const planetImageSizeClassNames: PlanetT = {
  Mercury: 'max-h-mercury md:max-h-md-mercury xl:max-h-lg-mercury',
  Venus: 'max-h-venus md:max-h-md-venus xl:max-h-lg-venus',
  Earth: 'max-h-earth md:max-h-md-earth xl:max-h-lg-earth',
  Mars: 'max-h-mars md:max-h-md-mars xl:max-h-lg-mars',
  Jupiter: 'max-h-jupiter md:max-h-md-jupiter xl:max-h-lg-jupiter',
  Saturn: 'max-h-saturn md:max-h-md-saturn xl:max-h-lg-saturn',
  Uranus: 'max-h-uranus md:max-h-md-uranus xl:max-h-lg-uranus',
  Neptune: 'max-h-neptune md:max-h-md-neptune xl:max-h-lg-neptune',
}

export default function Content({ planet, tabs }: ContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = tabs[activeTab];
 
  return (
    <main className="grid flex-grow md:grid-cols-2 xl:grid-cols-3 xl:pt-[7.875rem] xl:gap-y-4 xl:w-full xl:max-w-[1440px] xl:mx-auto xl:px-[10.3125rem]">
      <div
        role="tablist"
        className={`
          content_tablist flex flex-row justify-between px-6 border-b border-white/20 md:gap-y-4 md:px-10 md:justify-center
          md:flex-col md:border-b-0 md:order-last xl:mx-0 xl:px-0 xl:w-full xl:max-w-[21.875rem] xl:justify-start xl:self-end xl:justify-self-end
        `}
      >
        { tabs.map((tab, index) => (
          <button
            key={tab.title.small}
            role="tab"
            aria-selected={index === activeTab}
            className={
              `flex flex-row font-league-spartan text-[9px] text-center font-spartan-bold uppercase tracking-[0.12rem] gap-x-2 pt-5 pb-4 border-b-[0.25rem]
              ${index === activeTab ? buttonClassNames[planet] : 'border-transparent hover:bg-manatee md:border-white/20'}
              md:border xl:text-heading-3 md:px-10 md:py-4 transition-[background-color] duration-500 ease-in-out`
            }
            disabled={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            <span className="hidden text-white/50 md:block">0{ index + 1}</span>
            <span className="md:hidden">{ tab.title.small }</span>
            <span className="hidden md:block">{ tab.title.normal }</span>
          </button>
        ))}
      </div>
      <div
        className={
          `content_planet_image grid w-full xl:pt-0 xl:pb-0 md:col-span-2
          xl:row-span-2 xl:mr-0 h-[304px] md:h-[460px] xl:h-auto`
        }
      >
        <div className={`content_planet_image_wrapper grid justify-self-center xl:absolute place-self-center`}>
          <img src={currentTab.image.path} alt={currentTab.image.alt} className={`${planetImageSizeClassNames[planet]} h-full w-auto mx-auto`} />
          <img
            src={currentTab.hoverImage?.path}
            alt={currentTab.hoverImage?.alt}
            className={
              `${currentTab.hoverImage?.path ? 'opacity-100' : 'opacity-0'} absolute place-self-center mt-[8rem] md:mt-[12rem]
              xl:mt-[20rem] h-[76px] md:h-[126px] xl:h-[199px] transition-[opacity] duration-300 ease-in-out`
            }
          />
        </div>
      </div>
      <div
        className={
          `content_planet_info flex flex-col text-center text-body mx-6 md:justify-center md:mx-[2.44rem] xl:mx-0 xl:max-w-[21.875rem]
          xl:self-start xl:justify-self-end xl:gap-y-[1.5rem] md:text-start md:mr-0 xl:items-start`
        }
      >
        <h1 className="content_planet_name font-antonio text-heading-2 uppercase xl:text-heading-1">{planet}</h1>
        <span className="content_planet_facts font-league-spartan text-heading-4 xl:text-body tracking-[0px] leading-[1.375rem] xl:leading-body mt-[1rem]">{currentTab.content}</span>
        <span className="content_planet_source text-white/50 mt-[0.625rem] text-heading-3 leading-heading-3">
          Source: <Link target="_blank" href={currentTab.source} className="underline font-spartan-bold">Wikipedia<Image src="/images/icon-source.svg" alt="External link icon" width={12} height={12} className="inline-block ml-1" /></Link>
        </span>
      </div>
    </main>
  );
}
