function draw() {
  background(0, 0, 0);
  if (canDraw) {
    fill(100, 100, 100);
    ellipse(100, 100, 100);
  }
  mouseObj.x = mouseX;
  mouseObj.y = mouseY;
  renderGameObjects();
  if (levelDesignMode) return renderLevelDesignMode();
  handleUserInput();
  if (level === -1) return rainBallsForMenu();
  renderCurrentLevel();
}
