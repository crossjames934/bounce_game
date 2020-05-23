function handleClickOnShape() {
  if (mouseIsPressed && mouseHasBeenReleased && chosenBodyType !== null) {
    mouseHasBeenReleased = false;
    const randomId = (floor(random(2 ** 15, 2 ** 16))).toString(16);
    const element = {
      type: chosenBodyType,
      x: mouseX,
      y: mouseY,
      w: chosenBodyWidth,
      h: chosenBodyHeight,
      a: chosenBodyAngle,
      id: randomId
    }
    levelDesignElements.push(element);
    chosenBodyType = null;
  }
}