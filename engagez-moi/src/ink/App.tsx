import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import { loadPortfolioData } from "../shared/portfolioData";
import type { PortfolioData } from "../shared/portfolioTypes";

type Screen = "menu" | "experience" | "projects" | "skills" | "graphic";

export function App() {
  const { exit } = useApp();
  const [screen, setScreen] = useState<Screen>("menu");
  const [data, setData] = useState<PortfolioData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPortfolioData()
      .then(setData)
      .catch((e: unknown) => {
        const message = e instanceof Error ? e.message : "Unknown error";
        setError(message);
      });
  }, []);

  useInput((input) => {
    if (input === "q") exit();
    if (input === "m") setScreen("menu");

    if (screen === "menu") {
      if (input === "1") setScreen("experience");
      if (input === "2") setScreen("projects");
      if (input === "3") setScreen("skills");
      if (input === "4") setScreen("graphic");
    }
  });

  const counts = useMemo(() => {
    if (!data) return null;
    return {
      experiences: data.experiences.length,
      projects: data.projects.length,
      skills: data.skills.length,
      graphic: data.graphicPortfolio.length
    };
  }, [data]);

  if (error) {
    return <Text color="red">Erreur de chargement: {error}</Text>;
  }

  if (!data) {
    return <Text>Chargement des donnees...</Text>;
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Text bold color="cyan">
        Portfolio SSH - Ink
      </Text>
      <Text dimColor>q: quitter | m: menu</Text>
      <Text> </Text>

      {screen === "menu" && (
        <Box flexDirection="column">
          <Text>1. Experience ({counts?.experiences})</Text>
          <Text>2. Projects ({counts?.projects})</Text>
          <Text>3. Skills ({counts?.skills})</Text>
          <Text>4. Graphic Portfolio ({counts?.graphic})</Text>
          <Text> </Text>
          <Text color="yellow">Choisis 1-4</Text>
        </Box>
      )}

      {screen === "experience" && (
        <Box flexDirection="column">
          <Text bold>Experience</Text>
          {data.experiences.slice(0, 6).map((item, i) => (
            <Text key={i}>
              - {item.date} | {item.title} @ {item.company}
            </Text>
          ))}
        </Box>
      )}

      {screen === "projects" && (
        <Box flexDirection="column">
          <Text bold>Projects</Text>
          {data.projects.slice(0, 6).map((p, i) => (
            <Text key={i}>- {p.title}</Text>
          ))}
        </Box>
      )}

      {screen === "skills" && (
        <Box flexDirection="column">
          <Text bold>Skills</Text>
          {data.skills.slice(0, 8).map((s, i) => (
            <Text key={i}>- {s.name}: {s.percentage}%</Text>
          ))}
        </Box>
      )}

      {screen === "graphic" && (
        <Box flexDirection="column">
          <Text bold>Graphic Portfolio</Text>
          {data.graphicPortfolio.slice(0, 8).map((g, i) => (
            <Text key={i}>- {g.title} ({g.type})</Text>
          ))}
        </Box>
      )}
    </Box>
  );
}