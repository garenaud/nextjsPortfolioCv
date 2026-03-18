import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { PortfolioData } from "./portfolioTypes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "../../public");

async function loadJsonFile<T>(filename: string): Promise<T> {
  const filePath = path.join(publicDir, filename);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export async function loadPortfolioData(): Promise<PortfolioData> {
  const [experiences, projects, skills, graphicPortfolio] = await Promise.all([
    loadJsonFile<PortfolioData["experiences"]>("experience_fr.json"),
    loadJsonFile<PortfolioData["projects"]>("projects.json"),
    loadJsonFile<PortfolioData["skills"]>("skills.json"),
    loadJsonFile<PortfolioData["graphicPortfolio"]>("graphicPortfolio.json")
  ]);

  return { experiences, projects, skills, graphicPortfolio };
}