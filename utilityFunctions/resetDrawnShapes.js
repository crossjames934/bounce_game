function resetDrawnShapes() {
  for (let i = 0; i < drawnShapes.length; i++) {
    World.remove(world, drawnShapes[i].body);
  }
  drawnShapes.splice(0, drawnShapes.length);
}