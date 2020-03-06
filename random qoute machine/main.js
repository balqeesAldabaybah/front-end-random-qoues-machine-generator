let authors = [
    "A", 
    "B",
    "C",
    "D",
    "E"
];

let qoutes = [
    "Hello",
    "world",
    "welcome",
    "to",
    "home"
];

function newqoute (){
    let random = Math.floor(Math.random()*(qoutes.length));
    document.getElementById("text").innerHTML = qoutes[random];
    document.getElementById("author").innerHTML = authors[random];
}

$(document).ready(new function(){
   newqoute();
});


function newQouteCliked(){
    newqoute();
}