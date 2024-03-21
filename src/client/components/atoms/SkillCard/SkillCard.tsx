"use client";

import { sendGAEvent } from "@next/third-parties/google";
import React, { useEffect, useRef, useState } from "react";

interface SkillCardProps {
  Icon: React.JSX.Element;
  tags: string[];
  title: string;
}

export const SkillCard = ({ Icon, tags, title }: SkillCardProps) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const [rotateCard, setRotateCard] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  const opacity = isIntersecting ? "opacity-100" : "opacity-0";

  const rotateCardClass = rotateCard ? "my-rotate-y-180" : "";

  const handleToggleRotate = () => {
    setRotateCard((state) => !state);
    sendGAEvent({
      event: "toggleRotateSkillCard",
      page: "home",
      action: `click:${title}`,
      value: `rotate-${rotateCard ? "back" : "front"}`,
    });
  };

  return (
    <div
      ref={ref}
      onClick={handleToggleRotate}
      onTouchMove={handleToggleRotate}
      className={`cursor-pointer group perspective transition-opacity ease-in duration-[700ms] ${opacity}`}
      style={{
        transitionDelay: "100ms",
      }}
    >
      <div
        className={`relative preserve-3d ${rotateCardClass} w-full h-[115px] duration-1000 p-4 rounded-lg border-solid border-[1px] border-[#C9C9C9] dark:border-[#334D66] bg-[#E8EDF2] dark:bg-[#1A2633]`}
      >
        <div className="backface-hidden w-full h-full flex flex-col justify-center align-middle items-center">
          {Icon}
          <p className="font-medium mt-3 text-primary-dark dark:text-primary-light">
            {title}
          </p>
        </div>

        <div className="absolute top-0 left-0  p-4 my-rotate-y-180 backface-hidden w-full h-full overflow-hidden flex justify-center items-center text-primary-dark dark:text-primary-light">
          <p className="text-center text-xs">{tags.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};
