import mazeGame from "@/data/projects/maze-game";
import aiFileAnalyzer from "@/data/projects/ai-file-analyzer";
import localLLM from "@/data/projects/local-llm";
import hawakKamayScholarshipPortal from "@/data/projects/hawak-kamay-scholarship-portal";
import automatedPiggeryCleaningSystem from "@/data/projects/automated-piggery-cleaning-system";
import payslipGeneratorSystem from "@/data/projects/payslip-generator-system";
import ue4TopDownGamePrototype from "@/data/projects/ue4-top-down-game-prototype";
import pantryChef from "@/data/projects/pantry-chef";
import touristSpotGenerator from "@/data/projects/tourist-spot-generator";

export const projects = [
  mazeGame,
  aiFileAnalyzer,
  localLLM,
  hawakKamayScholarshipPortal,
  automatedPiggeryCleaningSystem,
  payslipGeneratorSystem,
  ue4TopDownGamePrototype,
  pantryChef,
  touristSpotGenerator
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
