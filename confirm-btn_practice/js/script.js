const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
 // // チェックボックスにチェックが入っているなら
 // if (isAgreed.checked) {
 //  // ボタンの無効化を無しにする
 //  btn.disabled = false;
 // } else {
 //  // ボタンを無効化する
 //  btn.disabled = true;
 // }
 // 下記へリファクタリング
 btn.disabled = !isAgreed.checked;
 
});
