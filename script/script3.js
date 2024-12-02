document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("width-slider");
  const layoutContainer = document.querySelector(".layout-container");
  const posterPage = document.querySelector(".poster2-page");
  let wasBelow1279 = false; // 1279 이하로 내려갔는지 추적
  let wasBelow800 = false;  // 800 이하로 내려갔는지 추적

  slider.addEventListener("input", () => {
    const value = slider.value; // 슬라이더 값
    layoutContainer.style.maxWidth = `${value}px`; // 레이아웃 너비 조정

    if (value < 800) {
      // 800 이하로 내려갔을 때 상태 업데이트
      wasBelow800 = true;
      wasBelow1279 = true;
      layoutContainer.classList.add("small-layout");
    } else if (value > 800 && value <= 1279) {
        wasBelow1279 = true;
        // 1279 이하로 한 번이라도 내려갔다면 스타일 적용
        posterPage.style.flexDirection = "column";
        posterPage.style.gap = "0px";
        posterPage.querySelector(".grid-container .title.font-Poiret").style.borderBottom = "10px solid black";
        posterPage.querySelector(".grid-container .title.font-Poiret").style.paddingBottom = "10px";
        posterPage.querySelector(".grid-container").style.display = "flex";
        posterPage.querySelector(".grid-container").style.flexDirection = "column";
        posterPage.querySelector(".grid-container").style.gap = "0px";
        posterPage.querySelector(".grid-container .num").style.maxHeight = "240px";
        posterPage.querySelector(".grid-container .title").style.marginTop = "20px";
        posterPage.querySelector(".grid-container .title").style.writingMode = "horizontal-tb";
        posterPage.querySelector(".grid-container .title").style.padding = "20px";
        posterPage.querySelector(".grid-container .section-1").style.height = "25%";
        posterPage.querySelector(".grid-container .section-2").style.gridTemplateColumns = "1.5fr 1.5fr 1fr 1fr 1fr";
        posterPage.querySelector(".grid-container .section-2").style.gridTemplateRows = "1fr 1.5fr";
        posterPage.querySelector(".grid-container .section-2").style.height = "45%";
        posterPage.querySelector(".grid-container .section-3").style.marginTop = "20px";
        posterPage.querySelector(".grid-container .section-3").style.height = "45%";
        posterPage.querySelector(".grid-container .section-3 .image-10").style.width = "60%";
    } else {
      // 1279px 이상으로 돌아갔을 때 초기화
      layoutContainer.classList.remove("small-layout");
      wasBelow800 = false; // 상태 초기화
      wasBelow1279 = false; // 상태 초기화
      posterPage.querySelector(".grid-container .title.font-Poiret").style = "";
      posterPage.querySelector(".grid-container").style = "";
      posterPage.querySelector(".grid-container .num").style.maxHeight = "240px";
      posterPage.querySelector(".grid-container .title").style = "";
      posterPage.querySelector(".grid-container .section-1").style = "";
      posterPage.querySelector(".grid-container .section-2").style = "";
      posterPage.querySelector(".grid-container .section-3").style = "";
      posterPage.querySelector(".grid-container .section-3 .image-10").style = "";
    }
   
    if(value > 800 && wasBelow800 && wasBelow1279) {
      wasBelow800 = false; // 상태 초기화
      layoutContainer.classList.remove("small-layout");
      posterPage.style.flexDirection = "column";
      posterPage.style.gap = "0px";
      posterPage.querySelector(".grid-container .title.font-Poiret").style.borderBottom = "10px solid black";
      posterPage.querySelector(".grid-container .title.font-Poiret").style.paddingBottom = "10px";
      posterPage.querySelector(".grid-container").style.display = "flex";
      posterPage.querySelector(".grid-container").style.flexDirection = "column";
      posterPage.querySelector(".grid-container").style.gap = "0px";
      posterPage.querySelector(".grid-container .num").style.maxHeight = "240px";
      posterPage.querySelector(".grid-container .title").style.marginTop = "20px";
      posterPage.querySelector(".grid-container .title").style.writingMode = "horizontal-tb";
      posterPage.querySelector(".grid-container .title").style.padding = "20px";
      posterPage.querySelector(".grid-container .section-1").style.height = "25%";
      posterPage.querySelector(".grid-container .section-2").style.gridTemplateColumns = "1.5fr 1.5fr 1fr 1fr 1fr";
      posterPage.querySelector(".grid-container .section-2").style.gridTemplateRows = "1fr 1.5fr";
      posterPage.querySelector(".grid-container .section-2").style.height = "45%";
      posterPage.querySelector(".grid-container .section-3").style.marginTop = "20px";
      posterPage.querySelector(".grid-container .section-3").style.height = "45%";
      posterPage.querySelector(".grid-container .section-3 .image-10").style.width = "60%";
    }
  });
});
