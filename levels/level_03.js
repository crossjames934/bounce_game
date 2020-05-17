function setupLevelThree() {
  removeAllObjects();
}

function renderLevelTwo() {
  if (frameCount % 100 === 0) {
    newParticle(width * 0.1, 0, 8);
  }
  if (goals.length > 0 && goals[0].received.length > 0) {
    setupLevelThree();
  }
}