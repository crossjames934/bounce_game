function draw() {
  background(0, 0, 0);
  cursor(ARROW);
  mouseObj.x = mouseX;
  mouseObj.y = mouseY;
  renderGameObjects();
  handleUserInput();
  if (levelDesignMode) return renderLevelDesignMode();
  if (level === -1) return rainBallsForMenu();
  renderCurrentLevel();
}
