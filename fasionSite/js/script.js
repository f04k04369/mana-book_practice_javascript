/*
ローディングからの画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');

window.addEventListener('load', () => {
 // ローディング中（グレースクリーン）
 loadingAreaGrey.animate(
  {
   opacity: (1, 0),
   visibility: 'hidden',
  }
 );
});