const items = document.querySelector('.img-item');

const keyframes = {
 opacity: [0, 1]
};
const options = {
 duration: 600,
 fill: 'forwards',
};

items.animate(keyframes, options);