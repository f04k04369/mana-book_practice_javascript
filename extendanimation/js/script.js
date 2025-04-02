const heading  = document.querySelector('#heading');

const Keyframes = {
 color: ['transparent', '#fff'],
 backgroundPosition: ['100% 0', '0 0'],
};
const options = {
 duration: 1000,
 easing: 'ease'
};

console.log(Keyframes);
heading.animate(Keyframes, options);