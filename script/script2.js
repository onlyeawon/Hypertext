let idleTimeout;
let isAnimating = false;
let animationFrame;
const idleTimeLimit = 3000; // 3초 동안 입력이 없으면 사인파 운동 시작

function init() {
  const slider = document.querySelector('#slider');
  const root = document.querySelector('#root');
  const content = document.querySelector('#resize-container__content');

  // 초기값 설정
  document.documentElement.style.setProperty('--width', `${slider.value}px`);
  document.documentElement.style.setProperty('--input-height', '3rem');

  slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    document.documentElement.style.setProperty('--width', `${sliderValue}px`);
    root.style.width = `${sliderValue}px`; // root 크기 조정

    updateLayout(sliderValue, root, content);
    resetIdleTimer();
  });

  document.addEventListener('mousemove', resetIdleTimer);
  document.addEventListener('keydown', resetIdleTimer);

  resetIdleTimer(); // 초기 타이머 설정
}

function resetIdleTimer() {
  if (isAnimating) {
    stopSineWaveAnimation();
  }

  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(startSineWaveAnimation, idleTimeLimit);
}

function startSineWaveAnimation() {
  isAnimating = true;
  const slider = document.querySelector('#slider');
  let startTime;

  const amplitude = (slider.max - slider.min) / 2; 
  const offset = amplitude + Number(slider.min); 
  const currentValue = Number(slider.value);
  const initialPhase = Math.asin((currentValue - offset) / amplitude);

  function animateSlider(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;

    const frequency = 0.001; 
    const sineValue =
      amplitude * Math.sin(frequency * elapsedTime + initialPhase) + offset;

    slider.value = sineValue.toFixed(0);
    document.documentElement.style.setProperty('--width', `${sineValue}px`);
    const root = document.querySelector('#root');
    root.style.width = `${sineValue}px`; // root 크기 조정
    const content = document.querySelector('#resize-container__content');
    updateLayout(sineValue, root, content);

    animationFrame = requestAnimationFrame(animateSlider);
  }

  animationFrame = requestAnimationFrame(animateSlider);
}

function stopSineWaveAnimation() {
  isAnimating = false;
  cancelAnimationFrame(animationFrame);
}

function updateLayout(sliderValue, root, content) {
  if (sliderValue <= 1279) {
    root.style.backgroundImage = "url('../assets/Bg2.png')";
    content.classList.add('mobile-layout');
  } else {
    root.style.backgroundImage = "url('../assets/Bg1.png')";
    content.classList.remove('mobile-layout');
  }

  if (sliderValue <= 600) {
    root.style.backgroundImage = "url('../assets/Bg3.png')";
    content.classList.add('extra-mobile-layout');
  } else {
    content.classList.remove('extra-mobile-layout');
  }
}

init();
