'use strict';

{
  //画像の初期設定
  const img = document.querySelector('img');
  const kanpai = ["./kan0.PNG", "./kan1.PNG"];
  const yashi = ["./ya0.PNG", "./ya1.PNG"];
  let index = 0;
  img.src = kanpai[index];

  //スクロールでの画像切り替え
  const downY = 300;
  const upY = downY * -1;
  const sqrollControl = 100;
  console.log(upY);
  window.addEventListener('wheel', e => {
    const sqroll = sqrollControl * e.deltaY;
    console.log(sqroll);
    if(
      sqroll > downY ||
      sqroll < upY
      ) {
      changeYashi();
    }
  });

  function changeYashi() {
    index === (yashi.length - 1) ? index = 0 : index++;
    img.src = yashi[index];
  }

  //時間での画像切り替え
  function changeKanpai() {
    if (index === kanpai.length - 1){
      index = 0;
    } else {
      index++;
    }

    img.src = kanpai[index];
  }

  setInterval(changeKanpai, 1000);
}
