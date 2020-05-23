function renderStartingX() {
  const arrowHeight = height * 0.05;
  const actualX = chosenStartingX * width;
  push();
  stroke(255, 100, 100);
  strokeWeight(4);
  line(actualX, 0, actualX, arrowHeight);
  line(actualX, arrowHeight, actualX - width * 0.01, arrowHeight / 2);
  line(actualX, arrowHeight, actualX + width * 0.01, arrowHeight / 2);
  pop();
}