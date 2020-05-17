function setupLevelThree() {
  removeAllObjects();
  level = 3;
  const rightHighBlock = new Block(width * 0.6, height * 0.3, width * 0.2, height * 0.1);
  const verticalBlock = new Block(width * 0.7, height * 0.6, width * 0.1, height * 0.6);
  const leftHigherBlock = new Block(width * 0.25, height * 0.55, width * 0.5, height * 0.1);
  const leftLowerBlock = new Block(width * 0.25, height * 0.8, width * 0.5, height * 0.1);
  blocks.push(rightHighBlock, leftHigherBlock, leftLowerBlock, verticalBlock);
  const goal = new Goal(width * 0.25, height * 0.75, width * 0.1, height * 0.05);
  goals.push(goal);
}

function renderLevelThree() {
  if (frameCount % 100 === 0) {
    newParticle(width * 0.8, 0, 8);
  }
  if (goals.length > 0 && goals[0].received.length > 0) {
    setupLevelThree();
  }
}