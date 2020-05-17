function removeAllObjects(addSmoke = true) {
  const gameObjects = [particles, drawnShapes, blocks, goals];
  for (let i = 0; i < gameObjects.length; i++) {
    for (let j = 0; j < gameObjects[i].length; j++) {
      if (i === 0 && addSmoke) {
        smoke.push(new Smoke(gameObjects[i][j].body.position.x, gameObjects[i][j].body.position.y, gameObjects[i][j].col))
      }
      // Put non-world objects (stuff unrecognised by Matter framework) towards end of array, change if statement below accordingly
      if (i < worldObjectCategories) World.remove(world, gameObjects[i][j].body);
      gameObjects[i].splice(j, 1);
      j--;
    }
  }
}