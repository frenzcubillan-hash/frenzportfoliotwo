import { languages } from "@/data/languages";

const aboutSections = [
  {
    title: "About Me",
    body:
      "I am Frenz, a compputer engineer focused on building useful software, AI tools, and embedded systems. I like work that connects clean interfaces with real technical depth.",
  },
  {
    title: "About My Projects",
    body:
      "My projects are practical experiments: games, local AI workflows, file analyzers, and systems that help me explore how ideas become usable products.",
  },
  {
    title: "About My Strengths",
    body:
      "I work best when I can combine engineering, design judgment, and fast learning. I enjoy turning rough requirements into something organized and working.",
  },
];

export default function About() {
  return (
    <div className="border-y border-white/10 py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase text-zinc-500">
          About Me
        </p>
        <h2 className="mt-6 text-4xl font-extrabold uppercase leading-none text-white md:text-6xl">
          Built With Intention
        </h2>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {aboutSections.map((section) => (
          <article key={section.title} className="border-t border-white/15 pt-6">
            <h3 className="text-xl font-extrabold text-white">
              {section.title}
            </h3>
            <p className="mt-5 leading-8 text-zinc-300">
              {section.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-white/15 pt-8">
        <div className="grid gap-8 md:grid-cols-[0.34fr_0.66fr] md:items-start">
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              Languages I Work With
            </h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Pulled from my resume and kept in a simple list so it is easy to update.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-extrabold text-zinc-100 transition hover:border-white/50 hover:bg-white hover:text-black"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
