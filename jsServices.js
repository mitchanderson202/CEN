// Nav Bar Change
let eventPage = document.getElementById("servicesNav");
eventPage.style.color = "red";

//Services Page
let servicesMain = document.getElementById("servicesMain");

let eventManagement = document.getElementById("eventSideNav");
let memberManagement = document.getElementById("memberSideNav");
let partnerManagement = document.getElementById("parSideNav");

eventSideNav.style.color = "red";

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
    servicesText.innerHTML = `<div id="servicesPara"><p>We offer member management services. A service designed to utilise a membership database and increase membership engagement by delivering consistent unique events and benefits to those members. </p>
    <p>A service that allows stakeholders to reap the rewards of having members and a membership database, but where they don't have to do the heavy lifting of managing those members.</p>
    
    <h3>Our Event Management Services include:</h3>
        
            <ul>
                <li>Membership recruitment</li>
                <li>Establishment and maintenance of membership database</li>
                <li>Membership communication, such as monthly newsletter</li>
                <li>Events and promotions specifically designed for members</li>
                <li>Discounts via our network partners</li>                
            </ul>
        <p>Our event management services are included when you become a Community Event Network partner.</p>
        <h4>Call Us! +61 000 000 000 together... stronger</h4>
        </div>
    `;

    image.style.cssText = `
    width: 100%;
    height: 50vh;
    object-fit: cover;
    `;

    eventManagement.style.color = "white";
    memberManagement.style.color = "red";
    partnerManagement.style.color = "white";
    // costManagement.style.color = "white";
})

partnerManagement.addEventListener("click", function(event) {
    event.preventDefault();

    image.src = "Pic3.png";
    servicesText.innerHTML = `
    <div id="servicesPara"> <h2>Grow and develop your business in a low-risk and economical way with the assistance of the Community Event Network.</h2>

    <p>We provide partner management services. We identify the kinds of services and activities you may require to grow your business and increase profits, then manage the process to achieve those benefits.</p>
    <p>Our team of Business Solution Managers are 100% focused on helping you to grow your business and increase profits.</p>
    <p>A service that provides our partners with the value of them coming onboard as part of the Community Event Network.</p>
    
    
    <h3>Our Event Management Services include:</h3>
        
            <ul>
                <li>Networking with like minded people and businesses</li>
                <li>Access to specialised business resources</li>
                <li>Process improvements, via technology and/or knowledge management</li>
                <li>Account management, such as better terms, discounts and greater access to resources</li>                                
            </ul>
        <p>Our event management services are included when you become a Community Event Network partner.</p>
        <h4>Call Us! +61 000 000 000 together... stronger</h4>
        </div>
    `;

    image.style.cssText = `
    width: 100%;
    height: 50vh;
    object-fit: cover;
    `;

    eventManagement.style.color = "white";
    memberManagement.style.color = "white";
    partnerManagement.style.color = "red";
    // costManagement.style.color = "white";
})

// costManagement.addEventListener("click", function(event) {
//     event.preventDefault();

//     eventManagement.style.color = "white";
//     memberManagement.style.color = "white";
//     partnerManagement.style.color = "white";
//     costManagement.style.color = "red";
// })

