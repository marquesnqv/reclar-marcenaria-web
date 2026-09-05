"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

type ProjectGalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
  text: string;
};

type ProjectGalleryProps = {
  projects: ProjectGalleryItem[];
};

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex === null ? null : projects[activeIndex];
  const activePosition = activeIndex === null ? 0 : activeIndex + 1;

  function closeGallery() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex - 1 + projects.length) % projects.length;
    });
  }

  function showNext() {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + 1) % projects.length;
    });
  }

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <section className="page-main project-grid">
        {projects.map((project, index) => (
          <button
            className="project-card project-card-button"
            key={project.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Abrir foto: ${project.title}`}
          >
            <Image
              src={project.src}
              alt={project.alt}
              fill
              sizes="(max-width: 619px) 100vw, 50vw"
              className="project-card-image"
            />
            <div className="project-card-copy">
              <span className="meta">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <span className="project-card-open">
                <Maximize2 size={16} />
                Ver foto
              </span>
            </div>
          </button>
        ))}
      </section>

      {activeProject ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${activeProject.title}`}
        >
          <button className="lightbox-backdrop" type="button" onClick={closeGallery} aria-label="Fechar galeria" />
          <div className="lightbox-panel">
            <button className="lightbox-close" type="button" onClick={closeGallery} aria-label="Fechar galeria">
              <X size={22} />
            </button>
            <button className="lightbox-nav previous" type="button" onClick={showPrevious} aria-label="Foto anterior">
              <ChevronLeft size={28} />
            </button>
            <div className="lightbox-image-wrap">
              <Image
                src={activeProject.src}
                alt={activeProject.alt}
                fill
                sizes="100vw"
                className="lightbox-image"
              />
            </div>
            <button className="lightbox-nav next" type="button" onClick={showNext} aria-label="Próxima foto">
              <ChevronRight size={28} />
            </button>
            <div className="lightbox-caption">
              <span className="meta">{activeProject.category}</span>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.text}</p>
              <small>
                {activePosition} de {projects.length}
              </small>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
