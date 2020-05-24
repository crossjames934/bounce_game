function Goal(x, y, w, h, a, extraOptions = {}) {
    this.w = w;
    this.h = h;
    this.received = [];

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
    this.body.label = 'goal';
    World.add(world, this.body);
}

Goal.prototype.show = function() {
    push();
    noStroke();
    fill(80, 100, 100);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.angle);
    rect(0, 0, this.w, this.h);
    pop();
};