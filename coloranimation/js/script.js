const heading  = document.querySelector('#heading');

const Keyframes = {
 color: ['#f66', '#fc2', '#0c6', '#0bd']
};
const options = {
 duration: 8000,
 direction: 'alternate',
 iterations:Infinity
};

console.log(Keyframes);
heading.animate(Keyframes, options);