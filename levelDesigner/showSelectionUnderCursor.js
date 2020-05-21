function showSelectionUnderCursor() {
  if (!chosenBodyType) return;
  if (chosenBodyType === 'block') fill(180, 180, 255);
  if (chosenBodyType === 'goal') fill(80, 100, 100);
  if (chosenBodyType === 'danger') fill(0, 100, 100);
  push();
  translate(mouseX, mouseY);
  rotate(chosenBodyAngle);
  rect(0, 0, width * chosenBodyWidth, height * chosenBodyHeight);
  pop();
}