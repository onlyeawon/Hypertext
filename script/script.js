function init() {
  const input = document.querySelector('#resize-container__input');
  const slider = document.querySelector('#slider');

  // 초기 높이 설정
  if (input) {
    const inputHeight = input.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      '--input-height',
      `${inputHeight / 16}rem`
    );
  }

  // 슬라이더 초기화
  if (slider) {
    slider.value = 1600; // 초기값 설정
    document.documentElement.style.setProperty(
      '--width',
      `${slider.value / 16}rem`
    );

    slider.addEventListener('input', (e) => {
      const value = e.target.value;
      document.documentElement.style.setProperty('--width', `${value / 16}rem`);
      applyResponsiveStyles(value); // 슬라이더 값에 따라 스타일 적용
    });

    // 초기 스타일 적용
    applyResponsiveStyles(slider.value);
  }
}
function applyResponsiveStyles(widthValue) {
  const root = document.querySelector('#root');
  const poster4Container = document.querySelector('.poster4-container');
  const poster4Main = document.querySelector('.poster4-main');
  const poster4MainLeft = document.querySelector('.poster4-main-left');
  const poster4MainRight = document.querySelector('.poster4-main-right');
  const poster4MainYellow = document.querySelector('.poster4-main-yellow');
  const mainH1_1 = document.querySelector('.main-h1-1');
  const mainH1_2 = document.querySelector('.main-h1-2');
  const mainSub1 = document.querySelector('.main-sub-1');
  const mainSub2 = document.querySelector('.main-sub-2');
  const poster4Footer = document.querySelector('.poster4-footer');
  const poster4FooterCenter = document.querySelector('.poster4-footer-center');

  // Reset 모든 요소
  function resetStyles() {
    [
      poster4Container,
      poster4Main,
      poster4MainLeft,
      poster4MainRight,
      poster4MainYellow,
      mainSub1,
      mainSub2,
    ].forEach((el) => {
      if (el) el.style = '';
    });
    if (mainH1_1) mainH1_1.style.display = 'block';
    if (mainH1_2) mainH1_2.style.display = 'none';
    if (poster4Footer) poster4Footer.style = '';
    if (poster4FooterCenter) poster4FooterCenter.style = '';
    if (poster4MainYellow) poster4MainYellow.style.display = 'block';
    if (root) root.style.backgroundImage = ''; // root의 배경 초기화
  }

  // 큰 화면 (1200px 이상 1600px 미만)
  if (widthValue >= 1200 && widthValue < 1600) {
    resetStyles();

    poster4Container.style.minHeight = '100vh';
    poster4Container.style.display = 'flex';
    poster4Container.style.justifyContent = 'space-between';
    poster4Container.style.flexDirection = 'column';

    poster4Main.style.display = 'flex';

    poster4MainLeft.style.boxSizing = 'border-box';
    poster4MainLeft.style.height = '75vh';
    poster4MainLeft.style.padding = '42px';
    poster4MainLeft.style.width = '70%';
    poster4MainLeft.style.backgroundImage = "url('./assets/BgEffect.png')";
    poster4MainLeft.style.backgroundBlendMode = 'color-dodge';
    poster4MainLeft.style.backgroundPosition = 'bottom';
    poster4MainLeft.style.backgroundSize = '100%';
    poster4MainLeft.style.backgroundColor = '#0F9968';
    poster4MainLeft.style.backgroundRepeat = 'no-repeat';
    poster4MainLeft.style.boxShadow = '3px 1px 4px 0px rgba(0, 0, 0, 0.7)';
    poster4MainLeft.style.zIndex = '10';

    mainH1_1.style.fontSize = 'clamp(1rem, 9vh, 180px)';
    mainH1_1.style.fontWeight = '900';
    mainH1_1.style.lineHeight = '1.5';
    mainH1_1.style.letterSpacing = '-0.15em';
    mainH1_2.style.display = 'none';

    poster4MainRight.style.width = '30%';
    poster4MainRight.style.height = '100%';
    poster4MainRight.style.lineHeight = '1.5';
    poster4MainRight.style.letterSpacing = '-0.15em';

    poster4MainYellow.style.boxSizing = 'border-box';
    poster4MainYellow.style.fontSize = 'clamp(1rem, 7vh, 66px)';
    poster4MainYellow.style.backgroundColor = '#E7E514';
    poster4MainYellow.style.fontWeight = '700';
    poster4MainYellow.style.padding = '36px';
    poster4MainYellow.style.boxShadow = '3px 1px 4px 0px rgba(0, 0, 0, 0.7)';
    poster4MainYellow.style.letterSpacing = '-0.15em';
    poster4MainYellow.style.lineHeight = '1.2';

    if (mainSub1) mainSub1.style.display = 'none';

    poster4Footer.style.fontSize = 'clamp(1rem, 2vh, 24px)';
    poster4Footer.style.fontWeight = '700';
    poster4Footer.style.display = 'flex';
    poster4Footer.style.justifyContent = 'space-between';
    poster4Footer.style.padding = '0 40px 30px 40px';
    poster4FooterCenter.style.margin = '0 10px';

    return;
  }

  // 중간 화면 (800px 이상 1200px 미만)
  if (widthValue >= 800 && widthValue < 1200) {
    resetStyles();

    root.style.backgroundImage = "url('../assets/Bg2.jpg')"; // 배경 설정

    mainH1_1.style.display = 'none';
    mainH1_2.style.display = 'block';
    mainH1_2.style.fontSize = 'clamp(2rem, 6vh, 140px)';
    mainH1_2.style.lineHeight = '1.2';
    mainH1_2.style.letterSpacing = '-0.15em';

    mainSub1.style.display = 'block';
    mainSub1.style.fontSize = 'clamp(1rem, 4vh, 70px)';
    mainSub1.style.fontWeight = '700';

    poster4MainYellow.style.display = 'none';
    poster4Footer.style.justifyContent = 'space-between';

    return;
  }

  // 작은 화면 (450px 이상 800px 미만)
  if (widthValue >= 450 && widthValue < 800) {
    resetStyles();

    root.style.backgroundImage = "url('../assets/Bg3.jpg')"; // 작은 화면 배경 설정
    poster4Main.style.display = 'block';

    poster4MainLeft.style.width = '100%';
    poster4MainLeft.style.height = 'auto';
    poster4MainLeft.style.padding = '22px';
    poster4MainLeft.style.paddingBottom = '15vh';

    poster4MainRight.style.marginLeft = 'auto';
    poster4MainRight.style.width = '80%';

    if (mainH1_1) mainH1_1.style.fontSize = '56px';

    mainH1_2.style.fontSize = '62px';
    mainH1_2.style.textAlign = 'right';

    if (mainSub1) mainSub1.style.display = 'none'; // main-sub-1 숨김
    if (mainSub2) {
      mainSub2.style.display = 'block'; // main-sub-2 보이게 설정
      mainSub2.style.fontSize = '20px'; // font-size 20px
      mainSub2.style.marginTop = '20px'; // margin-top 20px
      mainSub2.style.marginLeft = '10px'; // margin-left 10px
    }

    if (poster4MainYellow) poster4MainYellow.style.display = 'none'; // poster4-main-yellow 숨김

    poster4Footer.style.justifyContent = 'end';
    poster4Footer.style.padding = '30px 40px 30px 40px';

    return;
  }

  // 초기화 (기본 상태)
  resetStyles();
}

init();
