const heading  = document.querySelector('#heading');

const Keyframes = {
 opacity: [0, 1],
 translate: ['0 50px', 0]
};
const options = {
 easing: 'ease',
 duration: 2000
};

console.log(Keyframes);
heading.animate(Keyframes, options);