function generateNextLevel() {
  level++;
  temporarilyPreventDrawing();
  removeAllObjects();
  const currentLevel = allLevels[level];
  const {shapes} = currentLevel;
  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    const {type, x, y, w, h, a} = shape;
    if (type === "block") {
      blocks.push(new Block(x * width, y * height, w * width, h * height, a));
    }
    if (type === "bouncy") {
      blocks.push(new Block(x * width, y * height, w * width, h * height, a, { label: "bouncy" }));
    }
    if (type === "goal") {
      goals.push(new Goal(x * width, y * height, w * width, h * height, a));
    }
    if (type === "danger") {
      dangerZones.push(new DangerZone(x * width, y * height, w * width, h * height, a));
    }
  }
}
