/*
(function () {
  const IMG_SRC  = '커서이미지_백마.jpg';
  const SIZE     = 90;
  const LAG      = 0.07;

  const horse = document.createElement('img');
  horse.src = IMG_SRC;
  Object.assign(horse.style, {
    position:      'fixed',
    pointerEvents: 'none',
    zIndex:        '999999',
    width:         SIZE + 'px',
    opacity:       '0',
    userSelect:    'none',
    transition:    'opacity 0.3s, transform 0.12s ease',
    mixBlendMode:  'multiply',
  });
  document.body.appendChild(horse);

  let tx = -300, ty = -300;
  let cx = -300, cy = -300;
  let prevTx = -300;
  let facingRight = true;
  let visible = false;

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
    if (!visible) {
      cx = tx; cy = ty;
      horse.style.opacity = '0.88';
      visible = true;
    }
  });

  document.addEventListener('mouseleave', () => {
    horse.style.opacity = '0';
    visible = false;
  });
  document.addEventListener('mouseenter', () => {
    if (visible) horse.style.opacity = '0.88';
  });

  function tick() {
    cx += (tx - cx) * LAG;
    cy += (ty - cy) * LAG;

    const dx = tx - prevTx;
    if (Math.abs(dx) > 0.4) {
      facingRight = dx > 0;
      prevTx = tx;
    }

    const offsetX = facingRight ? -SIZE * 0.1 : -SIZE * 0.9;
    const offsetY = -SIZE * 0.85;

    horse.style.left      = (cx + offsetX) + 'px';
    horse.style.top       = (cy + offsetY) + 'px';
    horse.style.transform = facingRight ? 'scaleX(1)' : 'scaleX(-1)';

    requestAnimationFrame(tick);
  }
  tick();
})();
*/
