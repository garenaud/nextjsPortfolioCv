# Next.js Portfolio CV

Bienvenue sur le repository de mon site portfolio réalisé avec Next.js. Ce projet a été conçu pour apprendre et expérimenter avec des outils comme React et Material-UI (MUI), tout en adoptant de bonnes pratiques en matière de développement de composants.

## Description

Ce projet est un portfolio personnel qui présente mes compétences et mes projets. L'objectif principal était de se familiariser avec l'utilisation de Next.js, React, et Material-UI pour la création d'interfaces utilisateur dynamiques et réactives. Un effort particulier a été fait pour structurer les composants de manière modulaire, en utilisant des fichiers JSON pour le contenu plutôt que du code en dur.

## Installation

Vous pouvez installer et exécuter ce projet de deux manières :

### 1. Via Docker

1. Clonez le repository :
   ```bash
   git clone https://github.com/garenaud/nextjsPortfolioCv.git
   cd nextjsPortfolioCv
   ```
2. Construisez et lancez le conteneur Docker :
   ```docker build -t nextjs-portfolio .
   docker run -p 3000:3000 nextjs-portfolio
   ```
3. Accédez au site à l'adresse http://localhost:3000.

### 2. Via npm

1. Clonez le repository :
   ```bash
   git clone https://github.com/garenaud/nextjsPortfolioCv.git
   cd nextjsPortfolioCv
   ```
2. Installez les dépendances :
   ```npm install
   ```
3. Pour lancer le site en mode développement :
   ```npm run dev
   ```
   Accédez au site à l'adresse http://localhost:3000.
4. Pour construire et déployer le site :
   ```npm run build
   npm run deploy
   ```

## Usage

Ce projet est un simple site web portfolio. Après avoir installé et lancé le projet, vous pourrez visualiser mon portfolio en accédant à l'adresse locale http://localhost:3000.