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
    <div className="relative mt-10 md:mt-12">
      <div className="mb-5 flex items-center justify-between gap-6">
        <p className="text-sm font-semibold text-zinc-500">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </p>

        <div className="flex gap-2.5 sm:gap-3">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-zinc-100 transition hover:border-white hover:bg-white hover:text-black sm:h-14 sm:w-14"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            aria-label="Next project"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-zinc-100 transition hover:border-white hover:bg-white hover:text-black sm:h-14 sm:w-14"
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
            className="grid min-h-[420px] overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-[0_30px_120px_rgba(0,0,0,0.45)] lg:grid-cols-[0.58fr_0.42fr] xl:min-h-[440px]"
          >
            <div className="relative min-h-[220px] border-b border-white/10 bg-[#11100e] p-3 lg:min-h-full lg:border-b-0 lg:border-r sm:p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_34%),linear-gradient(135deg,rgba(165,132,89,0.14),transparent_48%)]" />
              <div className="relative h-full min-h-[196px] overflow-hidden border border-white/15 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="absolute left-0 top-0 z-10 flex h-7 w-full items-center gap-1.5 border-b border-white/10 bg-black/55 px-3 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#d66a53]" />
                  <span className="h-2 w-2 rounded-full bg-[#d6b253]" />
                  <span className="h-2 w-2 rounded-full bg-[#6fa76d]" />
                </div>
                <Image
                  src={project.cover || "/hero-engineering.png"}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover pt-7"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/55 px-3 py-2 text-[10px] font-semibold uppercase text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-4 sm:text-xs">
                {project.category}
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-7 md:p-8 xl:p-10">
              <div>
                <div className="flex items-center justify-between gap-4 text-xs font-semibold text-zinc-500 sm:text-sm">
                  <span>{project.year}</span>
                  <span>Featured Work</span>
                </div>

                <h3 className="mt-6 text-3xl font-extrabold uppercase leading-[0.95] text-white sm:text-4xl md:text-5xl xl:text-[3.35rem]">
                  {project.title}
                </h3>

                <div className="mt-5 h-px w-full bg-white/60" />

                <p className="mt-5 text-base leading-7 text-zinc-300 md:text-lg md:leading-7">
                  {project.description}
                </p>
              </div>

              <div className="mt-7">
                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex h-11 items-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black sm:h-12 sm:px-7"
                  >
                    View Project
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-zinc-200 transition hover:border-white/50 hover:text-white sm:h-12 sm:px-5"
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
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-zinc-200 transition hover:border-white/50 hover:text-white sm:h-12 sm:px-5"
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
