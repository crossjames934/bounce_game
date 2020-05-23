function renderChosenShapes() {
  for (let i = 0; i < levelDesignElements.length; i++) {
    const shape = levelDesignElements[i];
    const {x, y, w, h, a, type} = shape;
    push();
    fillColorFromBodyType(type);
    translate(x, y);
    rotate(a);
    rect(0, 0, w * width, h * height);
    // show editable circle
    const mouseIsNearCenter = dist(x, y, mouseX, mouseY) < height * 0.1;
    if (mouseIsNearCenter) {
      fill(255, 255, 0, 0.5);
      const editDiameter = height * 0.04;
      ellipse(0, 0, editDiameter);
      const clickingOnEditCircle = mouseIsPressed && mouseHasBeenReleased && dist(x, y, mouseX, mouseY) < editDiameter;
      if (clickingOnEditCircle) {
        mouseHasBeenReleased = false;
        chosenBodyType = type;
        chosenBodyWidth = w;
        chosenBodyHeight = h;
        chosenBodyAngle = a;
        levelDesignElements.splice(i, 1);
        i--;
      }
    }
    pop();
  }
}