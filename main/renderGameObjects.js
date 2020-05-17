function renderGameObjects() {
  const gameObjects = [particles, drawnShapes, blocks, smoke, goals];
  for (let i = 0; i < gameObjects.length; i++) {
    for (let j = 0; j < gameObjects[i].length; j++) {
      gameObjects[i][j].show();
      if (gameObjects[i][j].expended) {
        // Put non-world objects (stuff unrecognised by Matter framework) towards end of array, change if statement below accordingly
        if (i < worldObjectCategories) World.remove(world, gameObjects[i][j].body);
        gameObjects[i].splice(j, 1);
        j--;
      }
    }
  }
  menu();
  Engine.update(engine, 1000 / 30);
}