'use strict';

{
  //画像の初期設定
  const img = document.querySelector('img');
  const images = ["./facebook.logo.png", "./instagram.logo.png"];
  const wheelImage =["./aquacase.jpg", "./drink.jpg"];
  let index = 0;
  img.src = images[index];

  //スクロールでの画像切り替え
  window.addEventListener('mousewheel', () => {
    wheelChange();
  });

  function wheelChange() {
    if (index === images.length - 1){
      index = 0;
    } else {
      index++;
    }

    img.src = wheelImage[index];
  }

  //時間での画像切り替え
  function changeImage() {
    if (index === images.length - 1){
      index = 0;
    } else {
      index++;
    }

    img.src = images[index];
  }

  setInterval(changeImage, 1000);
}