function handleUserInput() {
  if (mouseIsPressed && canDraw) {
    if (!startedDrawing) touchedVertices.push([Math.round(mouseX), Math.round(mouseY)]);
    push();
    stroke(255);
    line(touchedVertices[0][0], touchedVertices[0][1], mouseX, mouseY);
    pop();
    startedDrawing = true;
  } else {
    if (touchedVertices.length > 0) {
      drawnShapes.push(new CustomShape([touchedVertices[0], [mouseX, mouseY]]));
      touchedVertices = [];
    }
    startedDrawing = false;
  }
}