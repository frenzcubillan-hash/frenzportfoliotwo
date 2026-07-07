import { strengths } from "@/data/strengths";

export default function Strengths() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-zinc-500">
        My Strength
      </p>
      <h2 className="mt-6 text-4xl font-extrabold uppercase leading-none text-white md:text-6xl">
        Strengths
      </h2>

      <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {strengths.map((strength, index) => (
          <article
            key={strength.title}
            className="grid gap-5 py-7 sm:grid-cols-[4rem_0.36fr_1fr] sm:items-start"
          >
            <span className="text-sm font-extrabold text-zinc-500">
              {index + 1}
            </span>
            <h3 className="text-xl font-extrabold text-white">
              {strength.title}
            </h3>
            <p className="leading-7 text-zinc-300">
              {strength.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
