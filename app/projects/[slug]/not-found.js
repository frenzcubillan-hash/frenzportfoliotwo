import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-6xl font-semibold">

        Project Not Found

      </h1>

      <p className="text-zinc-500 mt-5">

        The project you&apos;re looking for doesn&apos;t exist.

      </p>

      <Link
        href="/projects"
        className="mt-10 border border-white px-6 py-3 rounded-full"
      >
        Back to Projects
      </Link>

    </main>
  );
}
