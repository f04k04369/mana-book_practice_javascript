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

const content = `
 <div><img src="images/${lists[0]}" alt=""></div>
 <div><img src="images/${lists[1]}" alt=""></div>
 <div><img src="images/${lists[2]}" alt=""></div>
 <div><img src="images/${lists[3]}" alt=""></div>
 <div><img src="images/${lists[4]}" alt=""></div>
 <div><img src="images/${lists[5]}" alt=""></div>
`;
// menu.textContet = content;
menu.insertAdjacentHTML('beforeend', content);