'use strict';

{
  //画像の初期設定
  const img = document.querySelector('#count > img');
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
  function changeWork() {
    index === (work.length - 1) ? index = 0 : index++;
    img.src = work[index];
  }

  let count = 0;
  const scrollPostion = 3;

  window.addEventListener('wheel', e => {
    count++;
    if(count >= scrollPostion) {
      changeWork();
      count = 0;
    }
  });

 
}
