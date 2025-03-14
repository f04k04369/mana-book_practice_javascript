const color = document.querySelector('#colorPicker');
const text = document.querySelector('#colorText');

// カラーピッカーを操作した時の一連の動作
const colorBg = () => {
 // 選択した色を背景色に設定
 document.body.style.backgroundColor = color.value;

 // カラーコードを表示
 if (color.value === '#ffffff') {
  text.textContent = `カラーコード：${color.value}(white)`;
 } else if (color.value === '#000000') {
  text.textContent = `カラーコード: ${color.value} (black)`;
 }
 
 else {
  text.textContent = `カラーコード：${color.value}`;
 }

}

color.addEventListener('input', colorBg);