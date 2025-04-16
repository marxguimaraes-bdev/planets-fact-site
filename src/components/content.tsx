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
  Mercury: 'max-h-mercury md:max-h-md-mercury lg:max-h-lg-mercury my-10 lg:ml-[10.625rem]',
  Venus: 'max-h-venus md:max-h-md-venus lg:max-h-lg-venus lg:ml-[7.1875rem]',
  Earth: 'max-h-earth md:max-h-md-earth lg:max-h-lg-earth lg:ml-[5.625rem]',
  Mars: 'max-h-mars md:max-h-md-mars lg:max-h-lg-mars lg:ml-[9.1875rem]',
  Jupiter: 'max-h-jupiter md:max-h-md-jupiter lg:max-h-lg-jupiter lg:ml-[1.5rem]',
  Saturn: 'max-h-saturn md:max-h-md-saturn lg:max-h-lg-saturn lg:ml-[6.6875rem]',
  Uranus: 'max-h-uranus md:max-h-md-uranus lg:max-h-lg-uranus lg:ml-[5.375rem]',
  Neptune: 'max-h-neptune md:max-h-md-neptune lg:max-h-lg-neptune lg:ml-[5.625rem]',
}

export default function Content({ planet, tabs }: ContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = tabs[activeTab];
 
  return (
    <main className="grid flex-grow md:grid-cols-2 lg:pt-[7.875rem] lg:gap-y-4 lg:gap-x-[14.1875rem] lg:w-full lg:max-w-[1440px] lg:mx-auto lg:px-[10.3125rem]">
      <div role="tablist" className="content_tablist flex flex-row justify-between px-6 border-b border-white/20 md:gap-y-4 md:px-10 md:justify-center md:flex-col md:border-b-0 md:order-last lg:mx-0 lg:px-0 lg:w-full lg:max-w-[21.875rem] lg:justify-start lg:place-self-end">
        { tabs.map((tab, index) => (
          <button
            key={tab.title.small}
            role="tab"
            aria-selected={index === activeTab}
            className={
              `flex flex-row font-league-spartan text-[9px] text-center font-spartan-bold uppercase tracking-[0.12rem] gap-x-2 pt-5 pb-4 border-b-[0.25rem]
              ${index === activeTab ? buttonClassNames[planet] : 'border-transparent hover:bg-manatee md:border-white/20'}
              md:border lg:text-heading-3 md:px-10 md:py-4`
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
      <div className="content_planet_image grid h-fit pt-16 pb-16 md:pt-24 md:pb-[4.9375rem] lg:pt-0 lg:pb-0 md:col-span-2 lg:col-span-1 lg:row-span-2">
        <div className={`content_planet_image_wrapper h-full w-auto ml-auto mr-auto lg:mr-0 lg:w-full ${planetImageSizeClassNames[planet]}`}>
          <img src={currentTab.image.path} alt={currentTab.image.alt} className={`h-full w-auto`} />
        </div>
        { currentTab.hoverImage && (
          <img
            src={currentTab.hoverImage.path}
            alt={currentTab.hoverImage.alt}
            className="absolute justify-self-center self-center mt-[8rem] md:mt-[12rem] lg:mt-[20rem] h-[76px] md:h-[126px] lg:h-[199px]"
          />)}
      </div>
      <div className="content_planet_info flex flex-col text-center text-body mx-6 md:justify-center md:mx-[2.44rem] lg:max-w-[21.875rem] lg:place-self-end md:text-start md:mr-0 lg:max-h-[20.375rem] lg:justify-between">
        <h1 className="content_planet_name font-antonio text-heading-2 uppercase lg:text-heading-1">{planet}</h1>
        <span className="content_planet_facts font-league-spartan text-heading-4 lg:text-body tracking-[0px] leading-[1.375rem] lg:leading-body mt-[1rem]">{currentTab.content}</span>
        <span className="content_planet_source text-white/50 mt-[0.625rem] text-heading-3 leading-heading-3">
          Source: <Link target="_blank" href={currentTab.source} className="underline font-spartan-bold">Wikipedia<Image src="/images/icon-source.svg" alt="External link icon" width={12} height={12} className="inline-block ml-1" /></Link>
        </span>
      </div>
    </main>
  );
}
