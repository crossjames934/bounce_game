function DangerZone(x, y, w, h, a, extraOptions = {}) {
  this.w = w;
  this.h = h;

  let options = {
    friction: 0.3,
    restitution: 0.6,
    angle: a,
    isStatic: true,
    ...extraOptions
  };

  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  this.angle = a;
  this.body.label = 'danger';
  World.add(world, this.body);
}

DangerZone.prototype.show = function() {
  push();
  noStroke();
  fill(0, 90, sin(frameCount / 10) * 20 + 70);
  const {x, y} = this.body.position;
  translate(x, y);
  rotate(this.angle);
  rect(0, 0, this.w, this.h);
  pop();
  push();
  stroke("#00ff00");
  noFill();
  beginShape();
  for (let i = 0; i < this.body.vertices.length; i++) {
    vertex(this.body.vertices[i].x, this.body.vertices[i].y);
  }
  endShape();
  pop();
};