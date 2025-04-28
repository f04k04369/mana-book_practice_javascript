/*
ローディングからの画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
 // ローディング中（グレースクリーン）
 loadingAreaGrey.animate(
  {
   backdropFilter: ['blur(10px)', 'blur(0)'],
   background: ['rgba(238, 221, 136, 1)', 'rgba(238, 221, 136, 0)'],
   visibility: 'hidden',
  },
  {
   duration: 2000,
   delay: 1200,
   easing: 'ease',
   fill: 'forwards',
  }
 );

 // ローディング中（薄緑スクリーン）
 loadingAreaGreen.animate(
  {
   translate: ['0 100vh', '0 0', '0 -100vh']
  },
  {
   duration: 2000,
   delay: 800,
   easing: 'ease',
   fill: 'forwards',
  }
 );

 // ローディング中テキスト
 loadingText.animate(
  [
   {
    opacity: 1,
    offset: .8, //80%
   },
   {
    opacity: 0,
    offset: 1, //100%
   },
  ],
  {
   duration: 1200,
   easing: 'ease',
   fill: 'forwards',
  }
 );
});

/*
画像ギャラリー
================================================ */
const mainImage = document.querySelector('.gallery-image img');
const thumbnailImages = document.querySelectorAll('.gallery-thumbnails img');

// for(let i = 0; i < thumbnailImages.length; i++) {
//  thumbnailImages[i].addEventListener('mouseover', (e) => {
//   mainImage.src = e.target.src
//   mainImage.animate({opacity: [0, 1]}, 500);
//  });
// }
thumbnailImages.forEach((thumbnailImage) => {
 thumbnailImage.addEventListener('mouseover', (e) => {
  mainImage.src = e.target.src;
  mainImage.animate({opacity: [0, 1]}, 500);
 });
});