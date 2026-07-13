const project = {
  slug: "dropzone",

  title: "Dropzone",

  year: "2026",

  category: "Local-First App / Cloudflare / Storage",

  featured: true,

  description:
    "A private local-first inbox for saving files, links, notes, tags, and favorites directly in the browser.",

  overview:
    "Dropzone is a clean personal inbox for random but important digital items like screenshots, useful links, project files, quick notes, ideas, and references. The app is hosted on Cloudflare Workers, while saved files stay in the browser through IndexedDB and notes, links, tags, and favorites are kept in LocalStorage, making the experience fast, private, and account-free.",

  tech: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Vinext",
    "Vite",
    "Cloudflare Workers",
    "IndexedDB",
    "LocalStorage"
  ],

  github: "https://github.com/frenzcubillan-hash/dropzone",

  live: "https://dropzone.frenz.workers.dev/",

  cover: "/projects/dropzone/preview.png",

  gallery: [],

  challenges: [
    "Designing a local-first storage flow where files remain private in the user's browser.",
    "Combining file drops, notes, links, tags, search, filters, and favorites into one simple inbox.",
    "Deploying the app through Cloudflare Workers while keeping the saved library device-local."
  ],

  learned: [
    "Browser storage with IndexedDB and LocalStorage",
    "Local-first application design",
    "Cloudflare Workers deployment",
    "TypeScript and React app structure"
  ]
};

export default project;
