// Nav Bar Change
let eventPage = document.getElementById("homeNav");
eventPage.style.color = "#EBC45A";

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
       <th class="bcgChange" colspan="4">Raffles for Charity</th>
    </tr>
    <tr>
        <td>Easter Raffle</td>

        <td>Mothers Day Raffle</td>
    
        <td>Fathers Day Raffle</td>
    
        <td style="height:29vh;">Christmas Raffle</td>
    </tr>

</table>`;
    mainTable.style.cssText = `
    font-size: 1.4em;
    box-sizing: border-box;
`;


    button1.style.backgroundColor = "#e478528a";
    button2.style.backgroundColor = "#e47852";
    button3.style.backgroundColor = "#e478528a";
    button4.style.backgroundColor = "#e478528a";

})

button3.addEventListener("click", function (event) {
    event.preventDefault();
    mainTable.innerHTML = ` <table>
    <tr>
        <th class="bcgChange" colspan="3">Sport Tipping Competitions</th>
    </tr>
    <tr>
        <td>NBL<br>NBA</td>
        <td style="height:29vh;">NRL<br>AFL<br>Super Rugby</td>
        <td style="height:29vh;">A-League<br>EPL</td>
    </tr>
</table>`;

    mainTable.style.cssText = `
    font-size: 1.4em; 
    box-sizing: border-box;
`;


    button1.style.backgroundColor = "#e478528a";
    button2.style.backgroundColor = "#e478528a";
    button3.style.backgroundColor = "#e47852";
    button4.style.backgroundColor = "#e478528a";
})




