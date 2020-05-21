function triggerLevelDesignMode() {
  levelDesignMode = true;
  stage = 1;
  level = -1;
  document.getElementById('levelDesignBtn').style.display = "none";
  document.getElementById('startBtn').style.display = "none";

  const placeBlockBtn = document.getElementById('placeBlockBtn');
  const placeDangerBtn = document.getElementById('placeDangerBtn');
  const placeGoalBtn = document.getElementById('placeGoalBtn');

  placeBlockBtn.style.display = "block";
  placeDangerBtn.style.display = "block";
  placeGoalBtn.style.display = "block";

  placeBlockBtn.addEventListener('click', () => { chosenBodyType = "block" });
  placeDangerBtn.addEventListener('click', () => { chosenBodyType = "danger" });
  placeGoalBtn.addEventListener('click', () => { chosenBodyType = "goal" });

}