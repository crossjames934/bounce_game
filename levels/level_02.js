function setUpLevelTwo() {
  removeAllObjects();
  level = 2;

}

function renderLevelTwo() {
  if (frameCount % 100 === 0) {
    newParticle(width * 0.2, 0, 8);
  }
  if (goals.length > 0 && goals[0].received.length > 0) {
    removeAllObjects();
    console.log("YOU DUNNIT!");
  }
}