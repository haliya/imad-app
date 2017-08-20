// counter code 
var button = document.getElementById('counter');

var counter = 0;


button.onclick = function () {
// make a request to the counter response

// capture the response and store it in a variable

// render the response and store it
counter=counter + 1;
var span = document.getElemantById('count');
span.innerHTML = counter.toString();




};