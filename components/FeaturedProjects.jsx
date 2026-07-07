"use client";

import { projects } from "@/lib/projects";
import ProjectSlider from "@/components/ProjectSlider";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>

      <div className="max-w-3xl">

        <p className="text-xs uppercase text-zinc-500">
          Selected Work
        </p>

        <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
          Projects
        </h2>

        <p className="mt-8 max-w-2xl leading-8 text-zinc-400">
          A collection of systems, experiments, and applications focused on
          practical engineering, AI, and embedded development.
        </p>

      </div>

      <ProjectSlider projects={featured} />

    </div>
  );
}
