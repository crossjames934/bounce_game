function setUpLevelTwo() {
  removeAllObjects();
  level = 2;
  const diagonalObstacle = new Block(width * 0.55, height * 0.55, width * 0.3, height * 0.1, 45);
  const goalBase = new Block(width * 0.2, height * 0.8, width * 0.3, height * 0.1);
  blocks.push(diagonalObstacle, goalBase);
  const goal = new Goal(width * 0.2, height * 0.7, width * 0.05, height * 0.1);
  goals.push(goal);
}

function renderLevelTwo() {
  if (frameCount % 100 === 0) {
    newParticle(width * 0.8, 0, 8);
  }
  if (goals.length > 0 && goals[0].received.length > 0) {
    removeAllObjects();
    console.log("YOU DUNNIT!");
  }
}