"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroCarouselImage = {
  src: string;
  alt: string;
};

type HeroCarouselProps = {
  images: HeroCarouselImage[];
};

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((project, index) => (
        <div
          className={`hero-slide${index === activeIndex ? " is-active" : ""}`}
          key={project.src}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={project.src}
            alt={project.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 900px) 100vw, 48vw"
            className="hero-slide-image"
          />
        </div>
      ))}
    </>
  );
}
