function showSelectionUnderCursor() {
  if (!chosenBodyType) return;
  push();
  fillColorFromBodyType(chosenBodyType);
  translate(mouseX, mouseY);
  rotate(chosenBodyAngle);
  rect(0, 0, width * chosenBodyWidth, height * chosenBodyHeight);
  pop();
}