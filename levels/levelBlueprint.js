function Level(name, id, objective, completionCheck, coords, spawner, uponCompletion, extraConditions) {
    this.name = name;
    this.id = id; // Number
    this.objective = objective || ["Get the ball to hit the goal"];
    this.completionCheck = completionCheck || function() { return goals[0].received.length > 0 };
    this.coords = coords || { goals: [width * 0.7, height * 0.8] };
    this.spawner = spawner || function() {
        if (frameCount % 100 === 0) {
            newParticle(width * 0.2, 0, 8);
        }
    };
    this.uponCompletion = uponCompletion;
    this.extraConditions = extraConditions || function() {};
}

Level.prototype.init = function() {
    let objectTypes = Object.keys(this.coords);
    for (let i = 0; i < objectTypes.length; i++) {
        let type = objectTypes[i];
        G[type] = this.coords[type];
    }
};

Level.prototype.render = function() {
    // Objective text
    for (let i = 0; i < this.objective.length; i++) {
        const lineHeight = height * 0.05;
        text(this.objective[i], width / 2, height * 0.1 + lineHeight * (i+1));
    }
    // Completion check
    if (this.completionCheck()) this.uponCompletion();
    this.extraConditions();
};