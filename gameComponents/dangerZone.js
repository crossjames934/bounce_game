function DangerZone(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

DangerZone.prototype.show = function() {
  noStroke();
  fill(0, 90, sin(frameCount / 10) * 20 + 70);
  rect(this.x, this.y, this.w, this.h);
};