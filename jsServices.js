//Services Page
let servicesMain = document.getElementById("servicesMain");

let eventManagement = document.getElementById("eventSideNav");
let memberManagement = document.getElementById("memberSideNav");
let employeeRetention = document.getElementById("empSideNav");
let costManagement = document.getElementById("costSideNav");

let servicesText = document.getElementById("servicesPara");

let image = document.getElementById("servicePic");

eventManagement.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload(servicesMain);

    // eventManagement.style.color = "red";
    // memberManagement.style.color = "white";
    // employeeRetention.style.color = "white";
    // costManagement.style.color = "white";
})

memberManagement.addEventListener("click", function(event) {
    event.preventDefault();

    image.src = "Pic2.png";
    servicesText.innerHTML = `<div id="servicesPara">Are you spending most of their days updating and maintaining your membership databases? Here at TAS we are a professional team that can take the burned off you, so your association can focus on team stratergy and direction
    <h3>Our Event Management Services include:</h3>
        
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>                
            </ul>
        </div>
    `;

    eventManagement.style.color = "white";
    memberManagement.style.color = "red";
    employeeRetention.style.color = "white";
    costManagement.style.color = "white";
})

employeeRetention.addEventListener("click", function(event) {
    event.preventDefault();

    eventManagement.style.color = "white";
    memberManagement.style.color = "white";
    employeeRetention.style.color = "red";
    costManagement.style.color = "white";
})

costManagement.addEventListener("click", function(event) {
    event.preventDefault();

    eventManagement.style.color = "white";
    memberManagement.style.color = "white";
    employeeRetention.style.color = "white";
    costManagement.style.color = "red";
})

