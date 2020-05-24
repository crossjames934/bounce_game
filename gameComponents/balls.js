function particle(x, y, r) {
    const options = {
        restitution: 0.8,
        friction: 0.01,
        density: 0.05
    };
    return new Ball(x, y, r, options, "particle");
}

function Ball(x, y, r, options = {}, label) {
    this.col = color(random(360), 100, 100);
    this.body = Bodies.circle(x, y, r, options);
    this.body.label = label;
    this.body.pitch = floor(random(plonks.length));
    this.r = r;
    this.expended = false; // to be deleted
    this.age = 0;
    this.lifeSpan = 600;
    World.add(world, this.body);
}

Ball.prototype.show = function() {
    fill(this.col);
    noStroke();
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    ellipse(0, 0, this.r * 2);
    const eyeDistFromCenter = this.r * 0.4;
    const irisDiameter = this.r * 0.8;
    const pupilDiameter = irisDiameter / 2;
    // Eyes
    fill(255);
    ellipse(-eyeDistFromCenter, 0, irisDiameter);
    ellipse(eyeDistFromCenter, 0, irisDiameter);
    fill(0);
    ellipse(-eyeDistFromCenter, 0, pupilDiameter);
    ellipse(eyeDistFromCenter, 0, pupilDiameter);
    // Mouth
    if (this.body.angularSpeed < 0.5 ) {
        const mouthDiameter = this.r * 0.8;
        const mouthYDist = this.r * 0.4;
        arc(0, mouthYDist, mouthDiameter, mouthDiameter, 0, PI);
    }
    pop();
    this.age++;
    if (isOffScreen(this) || this.age > this.lifeSpan) {
        this.expended = true;
        if (this.age > this.lifeSpan) smoke.push(new Smoke(pos.x, pos.y, this.col));
    }
};


// for (let i = 0; i < goals.length; i++) {
//     if (rectIntersect({x: pos.x, y: pos.y, w: this.r, h: this.r}, goals[i]) && !this.logged) {
//         goals[i].received.push(`${this.body.label} -- Color: ${this.col}`);
//         this.logged = true;
//         smoke.push(new Smoke(pos.x, pos.y, this.col));
//         triggerFireworks(pos.x, pos.y, this.col);
//     }
// }
// for (let i = 0; i < dangerZones.length; i++) {
//     if (rectIntersect({x: pos.x, y: pos.y, w: this.r, h: this.r}, dangerZones[i]) && !this.logged) {
//         this.logged = true;
//         this.expended = true;
//         smoke.push(new Smoke(pos.x, pos.y, this.col));
//     }
// }