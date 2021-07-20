//Home Page

let mainTable = document.getElementById("mainTable");
let td = document.querySelector("td");

let button1 = document.getElementById("slideOne");
let button2 = document.getElementById("slideTwo");
let button3 = document.getElementById("slideThree");
let button4 = document.getElementById("slideFour");


button1.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload(mainTable);
})

button2.addEventListener("click", function (event) {
    event.preventDefault();
    mainTable.innerHTML = `<table>
    <tr>
       <th class="bcgChange" style="height:19vh;" colspan="4">Raffles for Charity</th>
    </tr>
    <tr>
        <td class="bcgChange">Easter Raffle</td>

        <td>Mothers Day Raffle</td>
    
        <td>Fathers Day Raffle</td>
    
        <td style="height:29vh;">Christmas Raffle</td>
    </tr>

</table>`;
    mainTable.style.cssText = `
    font-size: 2em;
    box-sizing: border-box;
`;

    button1.style.backgroundColor = "lightblue";
    button2.style.backgroundColor = "red";
    button3.style.backgroundColor = "lightblue";
    button4.style.backgroundColor = "lightblue";

})

button3.addEventListener("click", function (event) {
    event.preventDefault();
    mainTable.innerHTML = ` <table>
    <tr>
        <th class="bcgChange" style="height:19vh;" colspan="3">Sport Tipping Competitions</th>
    </tr>
    <tr>
        <td class="bcgChange" style="height:29vh;">NBL<br>NBA</td>
        <td style="height:29vh;">NRL<br>AFL<br>Super Rugby</td>
        <td style="height:29vh;">A-League<br>EPL</td>
    </tr>
</table>`;

    mainTable.style.cssText = `
    font-size: 2em; 
    box-sizing: border-box;   
`;


    button1.style.backgroundColor = "lightblue";
    button2.style.backgroundColor = "lightblue";
    button3.style.backgroundColor = "red";
    button4.style.backgroundColor = "lightblue";
})

// button4.addEventListener("click", function (event) {
//     event.preventDefault();
//     mainTable.innerHTML =``;
// })


// let homeNav = document.getElementById("homeNav");
// let servicesNav = document.getElementById("servicesNav");
// let eventsNav = document.getElementById("eventsNav");
// let partnersNav = document.getElementById("partnersNav");
// let affiliatesNav = document.getElementById("affiliatesNav");
// let merchandiseNav = document.getElementById("merchandiseNav");
// let contactNav = document.getElementById("contactNav");

// homeNav.addEventListener("click", function(event) {
//     event.preventDefault();
//     homeNav.style.color = "red";
//     servicesNav.style.color = "white";
//     eventsNav.style.color = "white";
//     partnersNav.style.color = "white";
//     affiliatesNav.style.color = "white";
//     merchandiseNav.style.color = "white";
//     contactNav.style.color = "white";
// })

