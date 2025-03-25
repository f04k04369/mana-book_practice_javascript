const menu = document.querySelector('#menu');

const lists = [
 'budou.jpeg',
 'lemon.jpeg',
 'mango.jpeg',
 'raim.jpeg',
 'apple.jpeg',
 'strawberry.jpeg'
];

console.log(lists);

for (let i = 0; i < lists.length; i++) {
  const content = `
   <div><img src="images/${lists[i]}" alt=""></div>
  `;
  // menu.textContet = content;
  menu.insertAdjacentHTML('beforeend', content);
}