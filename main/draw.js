function draw() {
  background(0, 0, 0);
  cursor(ARROW);
  mouseObj.x = mouseX;
  mouseObj.y = mouseY;
  if (levelDesignMode) return renderLevelDesignMode();
  renderCurrentLevel();
  handleUserInput();
  renderGameObjects();
}
