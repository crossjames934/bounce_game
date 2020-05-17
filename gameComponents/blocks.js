function Block(x, y, w, h, a = 0, isStatic = true, extraOptions, label = "block") {
    let options = {
        friction: 0.3,
        restitution: 0.6,
        isStatic: isStatic,
        angle: a
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.angle = a;
    this.expended = false;
    World.add(world, this.body);
}

Block.prototype.show = function() {
    fill(180, 180, 255);
    stroke(255);
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
};