const menu = document.querySelector('#menu');


const lists = [
 {name: 'イチゴ',
  img: 'strawberry.jpeg',
  price: 450},
 {
  name: 'レモン',
  img: 'lemon.jpeg',
  price: 400
 },
 {
  name: 'ぶどう',
  img: 'budou.jpeg',
  price: 350
 },
 {
  name: 'マンゴー',
  img: 'mango.jpeg',
  price: 300
 },
 {
  name: 'りんご',
  img: 'apple.jpeg',
  price: 250
 },
 {
  name: 'ライム',
  img: 'raim.jpeg',
  price: 200
 }
];

console.log(lists);

for (let i = 0; i < lists.length; i++) {
  const {name,img,price} = lists[i];
  const content = `
   <div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}</p></div>
  `;
  // menu.textContet = content;
  menu.insertAdjacentHTML('beforeend', content);
}