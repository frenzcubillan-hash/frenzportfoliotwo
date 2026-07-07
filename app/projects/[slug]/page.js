import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="pb-28 pt-32 md:pt-40">
      <Container>
        <section className="pb-20">
          <p className="text-sm uppercase text-zinc-500">
            {project.year} / {project.category}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
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

          <div className="mt-10 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 transition hover:border-white/50 hover:text-white"
              >
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 transition hover:border-white/50 hover:text-white"
              >
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
    <section className="border-t border-white/5 py-20">
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
    <section className="flex justify-between gap-6 border-t border-white/5 py-20">
      {prev ? (
        <Link href={`/projects/${prev.slug}`} className="text-zinc-400 transition hover:text-white">
          {"<-"} {prev.title}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link href={`/projects/${next.slug}`} className="text-right text-zinc-400 transition hover:text-white">
          {next.title} {"->"}
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
