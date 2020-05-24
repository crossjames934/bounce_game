function saveLevel() {
  const shapesForSave = levelDesignElements.map(shape => {
    const {type, x, y, w, h, a} = shape;
    const xFraction = x / width;
    const yFraction = y / height;
    return {
      type,
      x: roundToThreeDecimalPlaces(xFraction),
      y: roundToThreeDecimalPlaces(yFraction),
      w: roundToThreeDecimalPlaces(w),
      h: roundToThreeDecimalPlaces(h),
      a: roundToThreeDecimalPlaces(a)
    }
  });
  const level = {
    startingX: roundToThreeDecimalPlaces(chosenStartingX),
    shapes: shapesForSave,
  }
  download('customLevel.js', `const level = ${JSON.stringify(level)};`);
}

