function temporarilyPreventDrawing() {
  canDraw = false;
  setTimeout(() => { canDraw = true; }, 200);
}