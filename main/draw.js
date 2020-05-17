function draw() {
  background(0, 0, 0);
  cursor(ARROW);
  mouseObj.x = mouseX;
  mouseObj.y = mouseY;
  if (stage === 0) {
    if (Math.random() > 0.8) {
      newParticle(random(10, width - 10), 0, 10);
    }
  } else {
    levelOne();
  }
  handleUserInput();
  renderGameObjects();
}
