// Nav Bar Change
let eventPage = document.getElementById("eventsNav");
eventPage.style.color = "#EBC45A";

// Events Page
let ppl = document.getElementById("pplSideNav");
let stc = document.getElementById("stcSideNav");
let raf = document.getElementById("rafSideNav");

ppl.style.color = "#E47852";

let eventMain = document.getElementById("eventMain");

ppl.addEventListener("click", function(event) {
    event.preventDefault();
    location.reload("main");   
    
    ppl.style.color = "#E47852";
    stc.style.color = "white";
    raf.style.color = "white";
})

stc.addEventListener("click", function(event) {
    event.preventDefault();

    eventMain.innerHTML = "hello";


    stc.style.color = "#E47852";
    ppl.style.color = "white";
    raf.style.color = "white";
})

raf.addEventListener("click", function(event) {
    event.preventDefault();


    raf.style.color = "#E47852";
    stc.style.color = "white";
    ppl.style.color = "white";    
})

