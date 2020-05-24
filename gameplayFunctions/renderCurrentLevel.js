function renderCurrentLevel() {
  const currentLevel = allLevels[level];
  if (frameCount % 100 === 0) {
    newParticle(width * currentLevel.startingX, 0, 8);
  }
  if (goals.length > 0 && goals[0].received.length > 0) {
    generateNextLevel();
  }
}