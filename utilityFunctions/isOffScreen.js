function isOffScreen(obj, size = 50) {
  let x = obj.body.position.x;
  let y = obj.body.position.y;
  return (x < -size || x > width + size || y > height + size); // Removed logging of when it is above the top of the screen
  //return (x < -size || x > width + size || y > height + size || y < -size);
}