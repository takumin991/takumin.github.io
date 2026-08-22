// Canvasを作る
const canvas = document.createElement("canvas");

document.body.prepend(canvas);


// Canvasを使う準備
const ctx = canvas.getContext("2d");


// 画面サイズを設定
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// 星を入れる場所
let stars = [];


// 星を80個作る
for (let i = 0; i < 80; i++) {

  stars.push({

    // 星の位置
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,

    // 星の大きさ
    size: Math.random() * 2 + 1,

    // 星の速さ
    speed: Math.random() * 1 + 0.2
  });
}


// 星を動かす
function animate() {

  // 背景を消す
  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  // 星を1つずつ動かす
  for (let star of stars) {

    // 星を下に動かす
    star.y += star.speed;


    // 画面の下に行ったら上に戻す
    if (star.y > canvas.height) {

      star.y = 0;

      star.x =
        Math.random() * canvas.width;
    }


    // 星を描く
    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.size,
      0,
      Math.PI * 2
    );


    // 星の色
    ctx.fillStyle = "#00eaff";

    ctx.fill();
  }


  // もう一度アニメーション
  requestAnimationFrame(animate);
}


// アニメーション開始
animate();


// ブラウザの大きさが変わったとき
window.addEventListener("resize", function() {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});
