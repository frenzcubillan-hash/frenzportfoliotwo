import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch } from "lucide-react";
import Container from "@/components/Container";
import { getProject, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="pb-20 pt-28 md:pb-28 md:pt-40">
      <Container>
        <section className="pb-14 md:pb-20">
          <p className="text-sm uppercase text-zinc-500">
            {project.year} / {project.category}
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-none text-white sm:text-5xl md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400 md:mt-8 md:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3 md:mt-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-zinc-100 transition hover:border-white hover:bg-white hover:text-black"
              >
                <GitBranch size={17} />
                Repo
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-zinc-100 transition hover:border-white hover:bg-white hover:text-black"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>
            )}
          </div>
        </section>

        <ProjectSection title="Overview">
          <p className="leading-8 text-zinc-300">
            {project.overview}
          </p>
        </ProjectSection>

        <ProjectSection title="Challenges">
          <ul className="list-disc space-y-3 pl-5 text-zinc-300">
            {project.challenges?.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="What I Learned">
          <ul className="list-disc space-y-3 pl-5 text-zinc-300">
            {project.learned?.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectNav currentSlug={project.slug} />
      </Container>
    </main>
  );
}

function ProjectSection({ title, children }) {
  return (
    <section className="border-t border-white/5 py-14 md:py-20">
      <h2 className="mb-8 text-sm uppercase text-zinc-500">
        {title}
      </h2>

      <div className="text-base md:text-lg">
        {children}
      </div>
    </section>
  );
}

function ProjectNav({ currentSlug }) {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <section className="flex flex-wrap items-center justify-between gap-6 border-t border-white/5 py-12 md:py-16">
      {prev ? (
        <Link href={`/projects/${prev.slug}`} className="group inline-flex items-center gap-4 text-zinc-300 transition hover:text-white">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-zinc-100 transition group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-14 sm:w-14">
            <ChevronLeft size={22} />
          </span>
          <span className="max-w-[220px] text-sm font-semibold">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link href={`/projects/${next.slug}`} className="group ml-auto inline-flex items-center gap-4 text-right text-zinc-300 transition hover:text-white">
          <span className="max-w-[220px] text-sm font-semibold">
            {next.title}
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-zinc-100 transition group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-14 sm:w-14">
            <ChevronRight size={22} />
          </span>
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
