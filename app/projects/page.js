import Container from "@/components/Container";
import ProjectSlider from "@/components/ProjectSlider";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="pb-28 pt-32 md:pt-40">
      <Container>
        <div className="mb-20 max-w-3xl md:mb-28">
          <p className="text-xs uppercase text-zinc-500">
            Portfolio
          </p>

          <h1 className="mt-6 text-5xl font-semibold md:text-7xl">
            Selected Projects
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of software, embedded systems, AI experiments, and
            full-stack applications that reflect my passion for solving
            practical problems through technology.
          </p>
        </div>

        <ProjectSlider projects={projects} />
      </Container>
    </main>
  );
}
