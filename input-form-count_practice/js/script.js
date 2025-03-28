const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
 // キー入力された時の処理
 console.log(text.value.length);
 count.textContent = text.value.length;

 if (text.value.length > 100) {
  count.classList.add('alert');
 } else {
  count.classList.remove('alert');
 }
});