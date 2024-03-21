var timer;
var ele = document.getElementById("counter");

(function(){
    var sec = 0;
    counter =setInterval(() =>{
        ele.innerHTML = '' +sec;
        sec ++;
    }, 1000)
})()