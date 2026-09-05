import ProjectGallery from "@/components/project-gallery";
import { portfolioProjects } from "@/content/site";

export const metadata = {
  title: "Projetos",
};

export default function ProjetosPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-kicker">Projetos</p>
        <h1>Galeria para trabalhos recentes.</h1>
        <p>
          Esta página foi preparada para receber fotos reais da Reclar: cozinhas,
          closets, painéis, escritórios e ambientes comerciais.
        </p>
      </section>

      <ProjectGallery projects={portfolioProjects} />
    </main>
  );
}
