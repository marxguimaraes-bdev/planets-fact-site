import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="flex w-full justify-between items-center px-6 py-[0.75rem] border border-white/20 md:flex-col md:items-start">
      <span className="font-league-spartan text-white/20 uppercase text-[11px] font-spartan-bold leading-[16px] tracking-[0.05rem] lg:text-heading-4 md:leading-[1rem] md:-tracking-[0.04rem]">{title}</span>
      <span className="font-antonio text-white uppercase text-[20px] -tracking-[0.05rem]">{children}</span>
    </div>
  );
}
