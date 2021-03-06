function Block(x, y, w, h, a = 0, extraOptions = {}) {
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
    this.expended = false;
    World.add(world, this.body);
}

Block.prototype.show = function() {
    const colorHex = this.body.label === "bouncy" ? "#747fe5" : "#74e5c5";
    fill(colorHex);
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
};