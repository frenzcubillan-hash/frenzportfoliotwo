import profile from "@/data/profile";

function GitHubLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.8-.25.8-.56v-2.03c-3.26.71-3.95-1.4-3.95-1.4-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.1 0 0 .98-.32 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.6.24 2.8.12 3.1.75.82 1.2 1.86 1.2 3.14 0 4.5-2.74 5.48-5.35 5.77.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.81.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.6h4v11.9H3V9.6Zm6.28 0h3.84v1.63h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12v6.21h-4v-5.5c0-1.31-.02-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9v5.6h-4V9.6Z" />
    </svg>
  );
}

function GmailLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M3.5 5h17A1.5 1.5 0 0 1 22 6.5v11A1.5 1.5 0 0 1 20.5 19h-17A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5Zm1.22 2 7.28 5.1L19.28 7H4.72ZM4 9.05V17h16V9.05l-8 5.6-8-5.6Z" />
    </svg>
  );
}

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
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/10 px-6 transition hover:border-white/40 hover:text-white"
        >
          <GitHubLogo />
          GitHub
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/10 px-6 transition hover:border-white/40 hover:text-white"
        >
          <LinkedInLogo />
          LinkedIn
        </a>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/10 px-6 transition hover:border-white/40 hover:text-white"
        >
          <GmailLogo />
          Email
        </a>
      </div>
    </div>
  );
}
