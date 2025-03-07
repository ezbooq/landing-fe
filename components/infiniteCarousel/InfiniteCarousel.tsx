"use client";
import React, { useEffect, useRef } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface LogoProps {
  src: StaticImageData;
  url: string;
}

const InfiniteCarousel: React.FC<{ logos: LogoProps[] }> = ({ logos }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroller = scrollerRef.current;
    function addAnimation() {
      if (!scroller) return;
      const innerScroller = scroller.querySelector(".scroll_inner");
      if (!innerScroller) return;
      if (innerScroller.getAttribute("data-cloned") === "true") return;
      const innerScrollerChildren = Array.from(innerScroller.children);
      innerScrollerChildren.forEach((item) => {
        const extendedlogos = item.cloneNode(true) as HTMLElement;
        innerScroller.appendChild(extendedlogos);
      });
      innerScroller.setAttribute("data-cloned", "true");
    }
    addAnimation();
  }, []);
  return (
    <div ref={scrollerRef} className="scroller max-w-[1000px] ">
      <div className="scroll_inner flex flex-wrap gap-20 py-4  animate-infinite_scroll">
        {logos.map((logo, index) => (
          <Link className="p-1 " key={index} href={logo.url}>
            <Image
              key={index}
              src={logo.src}
              alt={`logo ${index + 1}`}
              height={50}
              className="w-[120px] h-[50px] object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
