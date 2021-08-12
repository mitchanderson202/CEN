// Nav Bar Change
let eventPage = document.getElementById("eventsNav");
eventPage.style.color = "red";

// Events Page
let ppl = document.getElementById("pplSideNav");
let stc = document.getElementById("stcSideNav");
let raf = document.getElementById("rafSideNav");

ppl.style.color = "red";

let eventMain = document.getElementById("eventMain");

ppl.addEventListener("click", function(event) {
    event.preventDefault();
    location.reload("main");   
    
    ppl.style.color = "red";
    stc.style.color = "white";
    raf.style.color = "white";
})

stc.addEventListener("click", function(event) {
    event.preventDefault();

    eventMain.innerHTML = "hello";


    stc.style.color = "red";
    ppl.style.color = "white";
    raf.style.color = "white";
})

raf.addEventListener("click", function(event) {
    event.preventDefault();


    raf.style.color = "red";
    stc.style.color = "white";
    ppl.style.color = "white";    
})

