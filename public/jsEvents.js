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

    eventMain.innerHTML = `
    <h5 class="h5Start"> Basketball </h5> <h5 class="h5End"> Football </h5>
    <a href="#" class="stcSports" id="stcSportsBB">NBA & NBL<br> $20 Rego <br> $100K Prize Pool</a>
    <a href="#" class="stcSports" id="stcSportsSoc">EPL & A-League <br> $20 Rego <br> $100K Prize Pool</a>
    <a href="#" class="stcSports" id="stcSportsRug">NRL & RU & AFL <br> $20 Rego <br> $100K Prize Pool</a>
    <a href="#" class="stcSports" id="stcSportsInt">NFL & IPL & EuroLeague <br> $20 Rego <br> $100K Prize Pool</a>
    <h5 class="h5Start"> League/Union/AFL </h5> <h5 class="h5End"> Gridiron/EuroLeague <br> / Indian Premier League </h5>
    `;
  
    eventMain.style.cssText = `
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 50% 50%;  
    grid-template-rows: 5% 45% 45% 5%;
    height: 50vh;
    `;


    stc.style.color = "#E47852";
    ppl.style.color = "white";
    raf.style.color = "white";
})

raf.addEventListener("click", function(event) {
    event.preventDefault();

    eventMain.innerHTML = `
    <h5 class="h5Start"> Easter Raffle </h5> <h5 class="h5End"> Fathers Day Raffle </h5>
    <a href="#" class="stcSports" id="stcSportsBB">$25 per Ticket <br> Or <br> 5 for $100<br>$1 Million in Prizes</a>
    <a href="#" class="stcSports" id="stcSportsSoc">$25 per Ticket <br> Or <br> 5 for $100<br>$1 Million in Prizes</a>
    <a href="#" class="stcSports" id="stcSportsRug">$25 per Ticket <br> Or <br> 5 for $100<br>$1 Million in Prizes</a>
    <a href="#" class="stcSports" id="stcSportsInt">$25 per Ticket <br> Or <br> 5 for $100<br>$1 Million in Prizes</a>
    <h5 class="h5Start"> Mothers Day Raffle </h5> <h5 class="h5End"> Christmas Raffle </h5>
    <br>
    <p class="extraP">* Any member that spends $100 or more, receives a raffle ticket for free.</p>
    `;


  
    eventMain.style.cssText = `
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 50% 50%;  
    grid-template-rows: 5% 45% 45% 5% 10%;
    height: 50vh;
    `;


    raf.style.color = "#E47852";
    stc.style.color = "white";
    ppl.style.color = "white";    
})

