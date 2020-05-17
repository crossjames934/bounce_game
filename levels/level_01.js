function setUpLevelOne() {
  level = 1;
  removeAllObjects();
  document.getElementById('startBtn').style.display = "none";
  const goalCoords = [width * 0.6, height * 0.7, width * 0.1, height * 0.1];
  goals.push(new Goal(...goalCoords));
  blocks.push(new Block(goalCoords[0], goalCoords[1] + goalCoords[3], goalCoords[2], goalCoords[3]));
}

function renderLevelOne() {
  if (frameCount % 100 === 0) {
    newParticle(width * 0.2, 0, 8);
  }
  if (goals.length > 0 && goals[0].received.length > 0) {
    setUpLevelTwo();
  }
}
