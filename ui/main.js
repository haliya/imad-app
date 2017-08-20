// counter code 
var button = document.getElementById('counter');




button.onclick = function () {
// make a request to the counter response
var request = new XMLHttpRequest();

// capture the response and store it in a variable
request.onreadystatechange = function (){
    if(request.statechange=== XMLHttpRequest.DONE){
        // take some action
        if(request.status== 200){
            var counter =request.responeText;
            var span = document.getElementById('count');
               span.innerHTML = counter.toString();

        }
    }
};
// render the response and store it

request.open('GET', 'http://ahaliya92.imad.hasura-app.io');
request.send(null);



};