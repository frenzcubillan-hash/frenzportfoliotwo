"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch } from "lucide-react";
import Spotlight from "@/components/Spotlight";

export default function ProjectSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  function next() {
    setIndex((i) => (i + 1) % projects.length);
  }

  function prev() {
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  }

  return (
    <div className="relative mt-12 md:mt-14">
      <div className="mb-6 flex items-center justify-between gap-6">
        <p className="text-sm font-semibold text-zinc-500">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>

        <div className="flex gap-3">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-zinc-100 transition hover:border-white hover:bg-white hover:text-black"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            aria-label="Next project"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-zinc-100 transition hover:border-white hover:bg-white hover:text-black"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <Spotlight>
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid min-h-[500px] overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-[0_30px_120px_rgba(0,0,0,0.45)] lg:grid-cols-[0.58fr_0.42fr] xl:min-h-[520px]"
          >
            <div className="relative min-h-[260px] border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r">
              <Image
                src="/hero-engineering.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-semibold uppercase text-white backdrop-blur-md">
                {project.category}
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-8 md:p-10 xl:p-12">
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-zinc-500">
                  <span>{project.year}</span>
                  <span>Featured Work</span>
                </div>

                <h3 className="mt-8 text-4xl font-extrabold uppercase leading-[0.95] text-white md:text-5xl xl:text-6xl">
                  {project.title}
                </h3>

                <div className="mt-7 h-px w-full bg-white/60" />

                <p className="mt-7 text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
                  {project.description}
                </p>
              </div>

              <div className="mt-9">
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-3.5 py-2 text-xs font-semibold text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    View Case Study
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-zinc-200 transition hover:border-white/50 hover:text-white"
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
                      className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-zinc-200 transition hover:border-white/50 hover:text-white"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </Spotlight>
      </AnimatePresence>
    </div>
  );
}
