import profile from "@/data/profile";

export default function Contact() {
  return (
    <div>
      <p className="text-xs uppercase text-zinc-500 md:text-sm">
        Contact
      </p>

      <div className="mt-6 flex items-center gap-5 sm:gap-7">
        <div
          aria-label="Frenz profile photo"
          className="h-20 w-20 shrink-0 rounded-full border border-white/15 bg-[#181715] bg-cover bg-center shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:h-24 sm:w-24 md:h-28 md:w-28"
          style={{ backgroundImage: "url('/contact-photo.jpg')" }}
        />

        <h2 className="text-4xl font-semibold md:text-6xl">
          Let&apos;s connect.
        </h2>
      </div>

      <p className="mt-10 max-w-2xl leading-8 text-zinc-400">
        I&apos;m open to software engineering roles, embedded systems, and AI-focused projects.
      </p>

      <div className="mt-12 flex flex-wrap gap-4 text-zinc-300">
        <a
          href={profile.github}
          className="inline-flex h-12 items-center rounded-full border border-white/10 px-6 transition hover:border-white/40 hover:text-white"
        >
          GitHub
        </a>

        <a
          href={profile.linkedin}
          className="inline-flex h-12 items-center rounded-full border border-white/10 px-6 transition hover:border-white/40 hover:text-white"
        >
          LinkedIn
        </a>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center rounded-full border border-white/10 px-6 transition hover:border-white/40 hover:text-white"
        >
          Email
        </a>
      </div>
    </div>
  );
}
