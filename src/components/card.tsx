import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
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

export default function Card({ title, children }: CardProps) {
  return (
    <div className="flex w-full justify-between items-center px-6 py-[0.75rem] border border-white/20 md:flex-col md:items-start">
      <span className="font-league-spartan text-white/20 uppercase text-[11px] font-spartan-bold leading-[16px] tracking-[0.05rem] lg:text-heading-4 md:leading-[1rem] md:-tracking-[0.04rem]">{title}</span>
      <span className="font-antonio text-white uppercase text-[20px] -tracking-[0.05rem]">{children}</span>
    </div>
  );
}
