function setup() {
  for (let i = 0; i < 16; i++) {
    plonks.push(
      new Howl({
        src: ["audio/plonk.wav"],
        rate: 1 + i / 10
      })
    );
  }
  const proportionateCanvas = determineAspectRatio();
  createCanvas(proportionateCanvas.w, proportionateCanvas.h);
  colorMode(HSB);
  rectMode(CENTER);
  noStroke();
  textAlign(CENTER);
  engine = Engine.create();
  world = engine.world;

  function collision(event) {
    let pairs = event.pairs;
    for (let i = 0; i < pairs.length; i++) {
      let labelA = pairs[i].bodyA.label;
      let labelB = pairs[i].bodyB.label;
      const collides = (a, b) => labelA === a && labelB === b || labelB === a && labelA === b;
      if (collides('particle', 'customShape')) {
        let ball = labelA === 'particle' ? pairs[i].bodyA : pairs[i].bodyB;
        let stereoPosition = map(ball.position.x, 0, width, -1, 1);
        plonks[ball.pitch].stereo(stereoPosition);
        plonks[ball.pitch].play();
      }
      if (collides('particle', 'goal')) {
        const {x, y} = goals[0].body.position;
        triggerFireworks(x, y);
        generateNextLevel();
      }
      if (collides('particle', 'danger')) {
        let ball = labelA === 'particle' ? pairs[i].bodyA : pairs[i].bodyB;
        const indexInArray = particles.findIndex(particle => particle.body.id === ball.id);
        smoke.push(new Smoke(ball.position.x, ball.position.y, '#ff0000'));
        particles.splice(indexInArray, 1);
        World.remove(world, ball);
      }
    }
  }

  document.getElementById('resetBtn').addEventListener('click', resetDrawnShapes);
  document.getElementById('startBtn').addEventListener('click', startGame);
  document.getElementById('levelDesignBtn').addEventListener('click', triggerLevelDesignMode);

  Events.on(engine, 'collisionStart', collision);
}