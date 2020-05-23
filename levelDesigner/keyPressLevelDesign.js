function keyPressLevelDesign() {
  if (keyIsDown(ESCAPE)) {
    chosenBodyType = null;
  }

  if (keyIsDown(188)) {
    chosenBodyAngle -= 0.05;
  }

  if (keyIsDown(190)) {
    chosenBodyAngle += 0.05;
  }

  if (keyIsDown(37) && chosenBodyWidth > 0) {
    chosenBodyWidth -= 0.01;
  }

  if (keyIsDown(39)) {
    chosenBodyWidth += 0.01;
  }

  if (keyIsDown(40) && chosenBodyHeight > 0) {
    chosenBodyHeight -= 0.01;
  }

  if (keyIsDown(38)) {
    chosenBodyHeight += 0.01;
  }

}