const project = {
  slug: "localdrop",

  title: "LocalDrop",

  year: "2026",

  category: "P2P File Transfer / WebRTC / Cloudflare",

  featured: true,

  description:
    "A private nearby file-sharing app that sends files between devices through browser-to-browser WebRTC transfers.",

  overview:
    "LocalDrop lets two nearby devices create a room, join with a short code, approve a transfer, and send files without accounts or cloud file storage. The app uses WebRTC for encrypted peer-to-peer transfers, WebSocket signaling for real-time room coordination, and Cloudflare Workers with Durable Objects for production hosting and room coordination.",

  tech: [
    "React",
    "Vite",
    "JavaScript",
    "Node.js",
    "Express",
    "WebSocket",
    "WebRTC",
    "Cloudflare Workers",
    "Durable Objects"
  ],

  github: "https://github.com/frenzcubillan-hash/localdrop",

  live: "https://localdrop.frenz.workers.dev/",

  cover: "/projects/localdrop/preview.png",

  gallery: [],

  challenges: [
    "Coordinating two-device rooms with real-time signaling and short join codes.",
    "Sending files directly between browsers while keeping file contents out of cloud storage.",
    "Adding receiver approval, progress, cancellation, and SHA-256 verification for safer transfers."
  ],

  learned: [
    "WebRTC peer-to-peer transfer flows",
    "WebSocket signaling",
    "Cloudflare Workers and Durable Objects",
    "File transfer reliability and verification"
  ]
};

export default project;
