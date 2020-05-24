function determineAspectRatio() {
  const {innerWidth, innerHeight} = window;
  if (innerWidth > innerHeight * 1.6) {
    return {
      w: innerHeight * 1.6,
      h: innerHeight
    }
  } else {
    return {
      w: innerWidth,
      h: innerWidth / 1.6
    }
  }
}