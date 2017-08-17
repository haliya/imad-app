console.log('Loaded!');



//change the text of the main-text div
var element =document.getElementbyId('main-text');

element.innerHTML='new value';

// move the image
var img =document.getElementbyId('madi');
img.onclick = function () {
    img.style.marginleft='100px';
};
