const color = document.querySelector('#colorPicker');
const text = document.querySelector('#colorText');

const colorBg = () => {
 text.textContent = `カラーコード：${color.value}`;
}

color.addEventListener('input', colorBg);