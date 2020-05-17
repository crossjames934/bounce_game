function setup() {
  for (let i = 0; i < 16; i++) {
    plonks.push(
      new Howl({
        src: ["audio/plonk.wav"],
        rate: 1 + i / 10
      })
    );
  }
  createCanvas(window.innerWidth - 10, window.innerHeight - 10);
  colorMode(HSB);
  rectMode(CENTER);
  //strokeWeight(3);
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
    }
  }

  document.getElementById('resetBtn').addEventListener('click', resetDrawnShapes);
  document.getElementById('startBtn').addEventListener('click', setUpLevelOne);

  Events.on(engine, 'collisionStart', collision);
}