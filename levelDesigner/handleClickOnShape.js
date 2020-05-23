function handleClickOnShape() {
  if (mouseIsPressed && mouseHasBeenReleased && chosenBodyType !== null) {
    mouseHasBeenReleased = false;
    //const randomId = (floor(random(2 ** 31, 2 ** 32))).toString(16);
    const element = {
      type: chosenBodyType,
      x: mouseX,
      y: mouseY,
      w: chosenBodyWidth,
      h: chosenBodyHeight,
      a: chosenBodyAngle,
      //id: randomId
    }
    chosenBodyType = null;
    levelDesignElements.push(element);
    levelDesignElements.sort((a, b) => b.type.charCodeAt(0) - a.type.charCodeAt(0));
  }
}