function triggerFireworks(x, y) {
  const range = 140;
  for (let i = 0; i < 40; i++) {
    smoke.push(new Smoke(x + random(-range, range), y + random(-range, range), color(random(360), 100, 100)));
  }
}