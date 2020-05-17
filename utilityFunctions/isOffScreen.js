function isOffScreen(obj, size = 50) {
  let x = obj.body.position.x;
  let y = obj.body.position.y;
  return (x < -size || x > width + size || y > height + size || y < -size);
}