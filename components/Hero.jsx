import Image from "next/image";
import profile from "@/data/profile";

export default function Hero() {
  const [firstName, ...restName] = profile.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <div className="relative flex min-h-[calc(100vh-9rem)] items-center">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[0.6fr_0.4fr]">
        <div className="relative aspect-[1.42] overflow-hidden border border-white/10 bg-zinc-950">
          <Image
            src="/hero-engineering.png"
            alt="Dark software engineering workspace"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 lg:-ml-36 xl:-ml-44">
          <p className="text-sm font-semibold uppercase text-zinc-400 md:text-base">
            Computer Engineering
          </p>

          <h1 className="mt-5 text-6xl font-extrabold uppercase leading-[0.9] text-white md:text-8xl">
            <span className="block lg:-ml-16 xl:-ml-24">{firstName}</span>
            <span className="block lg:ml-24 xl:ml-32">{lastName}</span>
          </h1>

          <h2 className="mt-6 text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
            Full Stack & AI Systems
          </h2>

          <div className="mt-10 h-px w-full max-w-sm bg-white/70" />

          <p className="mt-10 max-w-md text-base leading-8 text-zinc-300 md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black md:text-base"
            >
              View Projects
            </a>

            <a
              href={profile.resume}
              target="_blank"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-sm font-semibold text-zinc-200 transition hover:border-white/60 hover:text-white md:text-base"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
