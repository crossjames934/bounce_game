function renderCurrentLevel() {
  switch (level) {
    case 0:
      return rainBallsForMenu();
    case 1:
      return renderLevelOne();
    case 2:
      return renderLevelTwo();
    case 3:
      return renderLevelThree();
    case 4:
      return renderLevelFour();
  }
}