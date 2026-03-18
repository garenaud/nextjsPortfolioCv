import { readFile } from "node:fs/promises";
import path from "node:path";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";
import { stdin as input, stdout as output } from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, "../../public");

const COLORS = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  gray: "\x1b[90m"
};

function colorize(text, color) {
  return `${COLORS[color] || ""}${text}${COLORS.reset}`;
}

function width() {
  return Math.max(40, Math.min(output.columns || 80, 140));
}

function line(char = "-") {
  return char.repeat(width());
}

function wrapText(text, maxWidth) {
  const normalized = String(text || "").replace(/\s+/g, " ").trim();
  if (!normalized) {
    return [""];
  }

  const words = normalized.split(" ");
  const rows = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxWidth) {
      current = candidate;
      continue;
    }

    if (current) {
      rows.push(current);
      current = "";
    }

    if (word.length <= maxWidth) {
      current = word;
      continue;
    }

    let remaining = word;
    while (remaining.length > maxWidth) {
      rows.push(remaining.slice(0, maxWidth - 1) + "-");
      remaining = remaining.slice(maxWidth - 1);
    }
    current = remaining;
  }

  if (current) {
    rows.push(current);
  }

  return rows;
}

function printWrapped(text, indent = "") {
  const max = Math.max(20, width() - indent.length - 1);
  for (const row of wrapText(text, max)) {
    console.log(indent + row);
  }
}

function progressBar(percentage) {
  const safePct = Math.max(0, Math.min(100, Number(percentage) || 0));
  const barWidth = Math.max(10, Math.min(40, Math.floor(width() * 0.3)));
  const filled = Math.round((safePct / 100) * barWidth);
  const empty = Math.max(0, barWidth - filled);
  return `[${"#".repeat(filled)}${".".repeat(empty)}] ${safePct}%`;
}

function clearScreen() {
  output.write("\x1Bc");
}

async function loadJson(filename) {
  const fullPath = path.join(publicDir, filename);
  const data = await readFile(fullPath, "utf8");
  return JSON.parse(data);
}

async function loadPortfolioData() {
  const [experiences, projects, skills, graphicPortfolio] = await Promise.all([
    loadJson("experience_fr.json"),
    loadJson("projects.json"),
    loadJson("skills.json"),
    loadJson("graphicPortfolio.json")
  ]);

  return { experiences, projects, skills, graphicPortfolio };
}

function renderHeader() {
  console.log(colorize(line("="), "cyan"));
  console.log(colorize("PORTFOLIO SSH - GRENAUD", "bold"));
  console.log(colorize("Version terminal responsive (JSON -> console)", "gray"));
  console.log(colorize(line("="), "cyan"));
}

function renderMenu() {
  renderHeader();
  console.log("1. Profil");
  console.log("2. Experience");
  console.log("3. Projects");
  console.log("4. Skills");
  console.log("5. Graphic Portfolio");
  console.log("h. Help");
  console.log("q. Quit");
  console.log(line());
}

function renderProfile() {
  clearScreen();
  renderHeader();
  printWrapped(
    "Salut, je suis Grenaud. Ce portfolio SSH affiche les memes donnees que la version web, directement en terminal.",
    ""
  );
  console.log();
  printWrapped("Focus: UI/UX, developpement web, design graphique et projets techniques.");
  console.log();
  printWrapped("Astuce SSH: lance cette app avec `npm run ssh-portfolio` sur ta machine distante.", "");
  console.log(line());
}

function renderExperiences(experiences) {
  clearScreen();
  renderHeader();
  console.log(colorize("EXPERIENCE", "green"));
  console.log();

  for (const item of experiences) {
    const headline = `${item.date} | ${item.title} @ ${item.company} (${item.location})`;
    printWrapped(headline, "- ");
    if (Array.isArray(item.tasks)) {
      for (const task of item.tasks) {
        printWrapped(task, "  * ");
      }
    }
    console.log();
  }

  console.log(line());
}

function renderProjects(projects) {
  clearScreen();
  renderHeader();
  console.log(colorize("PROJECTS", "green"));
  console.log();

  for (const project of projects) {
    printWrapped(project.title, "- ");
    printWrapped(`Category: ${project.category || "N/A"}`, "  ");
    printWrapped(project.description || "", "  ");
    if (Array.isArray(project.technologies) && project.technologies.length > 0) {
      printWrapped(`Stack: ${project.technologies.join(", ")}`, "  ");
    }
    if (project.repoLink) {
      printWrapped(`Repo: ${project.repoLink}`, "  ");
    }
    if (project.pdfLink) {
      printWrapped(`Doc: ${project.pdfLink}`, "  ");
    }
    console.log();
  }

  console.log(line());
}

function renderSkills(skills) {
  clearScreen();
  renderHeader();
  console.log(colorize("SKILLS", "green"));
  console.log();

  const groups = new Map();
  for (const skill of skills) {
    const key = skill.category || "Other";
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(skill);
  }

  for (const [category, list] of groups.entries()) {
    console.log(colorize(category.toUpperCase(), "yellow"));
    for (const skill of list) {
      const label = `${skill.name}`.padEnd(16, " ");
      console.log(`- ${label} ${progressBar(skill.percentage)}`);
    }
    console.log();
  }

  console.log(line());
}

function renderGraphicPortfolio(items) {
  clearScreen();
  renderHeader();
  console.log(colorize("GRAPHIC PORTFOLIO", "green"));
  console.log();

  for (const item of items) {
    const heading = `${item.title} (${item.type || "N/A"})`;
    printWrapped(heading, "- ");
    printWrapped(item.description || "", "  ");
    printWrapped(`Asset: ${item.image || "N/A"}`, "  ");
    console.log();
  }

  console.log(line());
}

function renderHelp() {
  clearScreen();
  renderHeader();
  printWrapped("Commandes disponibles:");
  printWrapped("1-5: ouvrir une section");
  printWrapped("h: aide");
  printWrapped("q: quitter");
  console.log();
  printWrapped("Usage SSH exemple:");
  printWrapped("ssh user@host -t 'cd /path/to/engagez-moi && npm run ssh-portfolio'");
  console.log(line());
}

async function waitForEnter(rl) {
  await rl.question(colorize("\n[Enter] retour au menu...", "gray"));
}

async function main() {
  const data = await loadPortfolioData();
  const rl = readline.createInterface({ input, output });

  try {
    let running = true;
    while (running) {
      clearScreen();
      renderMenu();
      const answer = (await rl.question("Choix: ")).trim().toLowerCase();

      if (answer === "q") {
        running = false;
        continue;
      }

      if (answer === "1") {
        renderProfile();
        await waitForEnter(rl);
        continue;
      }

      if (answer === "2") {
        renderExperiences(data.experiences);
        await waitForEnter(rl);
        continue;
      }

      if (answer === "3") {
        renderProjects(data.projects);
        await waitForEnter(rl);
        continue;
      }

      if (answer === "4") {
        renderSkills(data.skills);
        await waitForEnter(rl);
        continue;
      }

      if (answer === "5") {
        renderGraphicPortfolio(data.graphicPortfolio);
        await waitForEnter(rl);
        continue;
      }

      renderHelp();
      await waitForEnter(rl);
    }
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error("Failed to run terminal portfolio:", error.message);
  process.exitCode = 1;
});
