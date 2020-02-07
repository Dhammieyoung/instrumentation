var deadline = new Date("Decembeer 5, 2019 15:37:25").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("d").innerHTML = days; 
/*+ "d "  
+ hours + "h " + minutes + "m " + seconds + "s "*/
document.getElementById("h").innerHTML = hours;
document.getElementById("m").innerHTML = minutes;
document.getElementById("s").innerHTML = seconds;
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("d").innerHTML = "EXPIRED"; 
    } 
}, 1000); 