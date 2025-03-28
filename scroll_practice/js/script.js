const getScrollPercent = () => {
 const scrolled = window.scrollY;
 console.log(`${scrolled}'スクロールされました'`);

 // ページ全体の高さ
 const pageHeight = document.documentElement.scrollHeight;

 const viewHeight = document.documentElement.clientHeight;

 console.log(`ページの高さ：${pageHeight}、表示領域の高さ:${viewHeight}`);

 // スクロールされた割合
 const percentage = scrolled / (pageHeight - viewHeight) * 100;
 console.log(percentage);

 // プログレスバーに幅を設定
 document.querySelector('#bar').style.width = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);