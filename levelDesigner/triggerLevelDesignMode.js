function triggerLevelDesignMode() {
  levelDesignMode = true;
  level = -1;
  document.getElementById('levelDesignBtn').style.display = "none";
  document.getElementById('startBtn').style.display = "none";

  const placeBlockBtn = document.getElementById('placeBlockBtn');
  const placeDangerBtn = document.getElementById('placeDangerBtn');
  const placeGoalBtn = document.getElementById('placeGoalBtn');
  const saveLevelBtn = document.getElementById('saveLevelBtn');

  placeBlockBtn.style.display = "block";
  placeDangerBtn.style.display = "block";
  placeGoalBtn.style.display = "block";
  saveLevelBtn.style.display = "block";

  placeBlockBtn.addEventListener('click', () => { chosenBodyType = "block" });
  placeDangerBtn.addEventListener('click', () => { chosenBodyType = "danger" });
  placeGoalBtn.addEventListener('click', () => { chosenBodyType = "goal" });
  saveLevelBtn.addEventListener('click', saveLevel);

}