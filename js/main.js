/**
 * Created by Kevin on 2/16/2016.
 */

    var controller;
var init = function () { // wait for document ready
    // init
    controller = new ScrollMagic.Controller();
    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("div.panel.second", 1, {y: "80%"}, {y: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("div.panel.third",    1, {y:  "110%"}, {y: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("div.panel.fourth", 1, {y: "110%"}, {y: "0%", ease: Linear.easeNone}) // in from top
    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
    })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);


};




$(document).ready(function(){
    init();


});

$("#mainButtonDown").click(function(){
    $('html, body').animate({
        scrollTop: $('#pinContainer').offset().top
    }, 'slow');
});

$("#secondButtonDown").click(function(){
    $('html, body').animate({
        scrollTop: '+=1200%'
    }, 'slow');
});


// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("contactForm");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);