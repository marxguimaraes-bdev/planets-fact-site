import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="flex w-full justify-between items-center md:gap-y-[0.375rem] xl:gap-y-1 pl-6 pr-6 pt-[0.5625rem] pb-[0.8125rem] md:pt-[1rem] md:pr-0 md:pb-[1.1875rem] md:pl-[0.9375rem] xl:pt-[20px] xl:pb-[27px] xl:pl-[23px] border border-white/20 md:flex-col md:items-start">
      <span className="font-league-spartan text-white/20 uppercase text-[0.5rem] font-spartan-bold leading-[1rem] tracking-[0.05rem] xl:text-heading-4 xl:leading-[1.5625rem] md:-tracking-[0.04rem]">{title}</span>
      <span className="font-antonio text-white uppercase text-[1.25rem] md:text-[1.5rem] xl:text-[2.5rem] -tracking-[0.05rem] leading-[1.625rem] md:leading-[1.9375rem] xl:leading-[3.25rem]">{children}</span>
    </div>
  );
}
