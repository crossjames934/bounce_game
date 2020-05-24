function startGame() {
  const startBtn = document.getElementById('startBtn');
  const levelDesignBtn = document.getElementById('levelDesignBtn');
  startBtn.style.display = "none";
  levelDesignBtn.style.display = "none";
  removeAllObjects();
  generateNextLevel();
}