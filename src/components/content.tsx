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
  Mercury: 'max-h-mercury w-auto md:max-h-md-mercury lg:max-h-lg-mercury my-10',
  Venus: 'max-h-venus w-auto md:max-h-md-venus lg:max-h-lg-venus',
  Earth: 'max-h-earth w-auto md:max-h-md-earth lg:max-h-lg-earth',
  Mars: 'max-h-mars w-auto md:max-h-md-mars lg:max-h-lg-mars',
  Jupiter: 'max-h-jupiter w-auto md:max-h-md-jupiter lg:max-h-lg-jupiter',
  Saturn: 'max-h-saturn w-auto md:max-h-md-saturn lg:max-h-lg-saturn',
  Uranus: 'max-h-uranus w-auto md:max-h-md-uranus lg:max-h-lg-uranus',
  Neptune: 'max-h-neptune w-auto md:max-h-md-neptune lg:max-h-lg-neptune',
}

export default function Content({ planet, tabs }: ContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = tabs[activeTab];
 
  return (
    <main className="grid flex-grow md:grid-cols-2 lg:py-10 lg:gap-y-4 lg:mx-[10.3rem]">
      <div role="tablist" className="flex flex-row justify-between px-6 border-b border-white/20 md:gap-y-4 md:px-10 md:justify-center md:flex-col md:border-b-0 md:order-last lg:mx-0 lg:px-0 lg:justify-start">
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
      <div className="grid p-10 md:col-span-2 lg:col-span-1 lg:row-span-2">
        <Image src={currentTab.image.path} alt={currentTab.image.alt} width={0} height={0} className={`place-self-center ${planetImageSizeClassNames[planet]}`} />
        { currentTab.hoverImage && (
          <Image
            src={currentTab.hoverImage.path}
            alt={currentTab.hoverImage.alt}
            width={170}
            height={170}
            className="absolute justify-self-center self-center mt-[8rem] md:mt-[12rem] lg:mt-[20rem] h-[76px] w-auto md:h-[126px] lg:h-[199px]"
          />)}
      </div>
      <div className="flex flex-col text-center text-body gap-y-2 mx-6 md:justify-center md:mx-[2.44rem] lg:mx-0 md:text-start md:mr-0 lg:pt-20 lg:justify-between">
        <h1 className="font-antonio text-heading-2 uppercase lg:text-heading-1">{planet}</h1>
        <span className="font-league-spartan leading-[1.375rem] lg:leading-body">{currentTab.content}</span>
        <span className="text-white/50">
          Source: <Link target="_blank" href={currentTab.source} className="underline font-spartan-bold">Wikipedia<Image src="/images/icon-source.svg" alt="External link icon" width={12} height={12} className="inline-block ml-1" /></Link>
        </span>
      </div>
    </main>
  );
}
