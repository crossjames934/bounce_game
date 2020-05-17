function setupLevelFour() {
  removeAllObjects();
  level = 4;
  const higherBlock = new Block(width * 0.2, height * 0.4, width * 0.2, height * 0.1, 60);
  const lowerBlock = new Block(width * 0.7, height * 0.8, width * 0.2, height * 0.1, 0, {label: "red"});
  blocks.push(higherBlock, lowerBlock);
  const dangerZone = new DangerZone(width * 0.5, height * 0.7, width * 0.2, height * 0.1);
  dangerZones.push(dangerZone);
  const goal = new Goal(width * 0.7, height * 0.7, width * 0.1, height * 0.1);
  goals.push(goal);
}

function renderLevelFour() {
  if (frameCount % 100 === 0) {
    newParticle(width * 0.2, 0, 8);
  }
  if (goals.length > 0 && goals[0].received.length > 0) {
    removeAllObjects();
    alert("YOU WIN!");
  }
}