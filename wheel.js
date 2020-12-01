'use strict';

{
  //画像の初期設定
  const img = document.querySelector('#wheel > img');
  const work = ["./work1.PNG", "./work2.PNG"];
  const stand = ["./stand1.PNG", "./stand2.PNG"];
  let index = 0;
  img.src = stand[index];

  //時間での画像切り替え
  (function changeStand() {
    index === (stand.length - 1) ? index = 0 : index++;
    img.src = stand[index];
    setTimeout(changeStand, 1000);
  })();


  //スクロールでの画像切り替え
  const downY = 300;
  const upY = downY * -1;
  const sqrollControl = 100;

  function changeWork() {
    index === (work.length - 1) ? index = 0 : index++;
    img.src = work[index];
  }

  window.addEventListener('wheel', e => {
    const sqroll = sqrollControl * e.deltaY;
    if(
      sqroll > downY ||
      sqroll < upY
      ) {
      changeWork();
    }
  });
}
