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
        .fromTo("div.panel.fifth", 1, {y: "110%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom
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
