'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  planet?: string;
  tabs: Tab[];
};

export default function Content({ planet = 'Earth', tabs }: ContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = tabs[activeTab];
 
  return (
    <div className="grid flex-grow md:grid-cols-2 lg:py-10 lg:gap-y-4">
      <div role="tablist" className="flex flex-row justify-between px-6 border-b border-white/20 md:gap-y-4 md:px-10 md:justify-center md:flex-col md:border-b-0 md:order-last lg:mx-[10.3rem] lg:px-0 lg:justify-start">
        { tabs.map((tab, index) => (
          <button
            key={tab.title.small}
            role="tab"
            aria-selected={index === activeTab}
            className={
              `flex flex-row font-league-spartan text-[9px] text-center font-spartan-bold uppercase tracking-[0.12rem] gap-x-2 pt-5 pb-4
              ${index === activeTab ? 'border-white md:border-transparent md:bg-purple-heart' : 'border-transparent hover:bg-manatee md:border-white/20'} border-b-[0.25rem]
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
      <div className="grid place-items-center p-10 md:col-span-2 lg:col-span-1 lg:row-span-2">
        <Image src={currentTab.image.path} alt={currentTab.image.alt} width={173} height={173} className="lg:w-96 lg:h-96" />
        { currentTab.hoverImage && (<Image src={currentTab.hoverImage.path} alt={currentTab.hoverImage.alt} width={70} height={70} className="absolute self-end -mb-7"/>)}
      </div>
      <div className="flex flex-col text-center text-body gap-y-2 mx-6 md:justify-center md:mx-[2.44rem] lg:mx-[10.3rem] md:text-start md:mr-0 lg:pt-20 lg:justify-between">
        <span className="font-antonio text-heading-2 uppercase lg:text-heading-1">{planet}</span>
        <span className="font-league-spartan leading-[1.375rem] lg:leading-body">{currentTab.content}</span>
        <span className="text-white/50">
          Source: <Link target="_blank" href={currentTab.source} className="underline font-spartan-bold">Wikipedia<Image src="/images/icon-source.svg" alt="External link icon" width={12} height={12} className="inline-block ml-1" /></Link>
        </span>
      </div>
    </div>
  );
}
