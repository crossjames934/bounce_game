function removeAllObjects(addSmoke = true) {
  const gameObjects = [particles, drawnShapes, blocks, goals, dangerZones];
  for (let i = 0; i < gameObjects.length; i++) {
    for (let j = 0; j < gameObjects[i].length; j++) {
      if (i === 0 && addSmoke) {
        smoke.push(new Smoke(gameObjects[i][j].body.position.x, gameObjects[i][j].body.position.y, gameObjects[i][j].col))
      }
      World.remove(world, gameObjects[i][j].body);
      gameObjects[i].splice(j, 1);
      j--;
    }
  }
}