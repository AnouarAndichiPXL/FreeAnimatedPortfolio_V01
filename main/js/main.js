'use strict'


window.addEventListener("load", WindowHandel);

function WindowHandel(){
// Show and Hide Blocks
let heroBtn = document.getElementById("hero");
let aboutMeBtn = document.getElementById("aboutMe");
let projectsBtn = document.getElementById("projects");
let contactBtn = document.getElementById("contact");
let hireMe =  document.getElementById("hireMe");
let Menu = document.getElementsByClassName("Menu")[0];

heroBtn.addEventListener("click", heroClick);
aboutMeBtn.addEventListener("click", aboutMeClick);
projectsBtn.addEventListener("click", projectsClick)
contactBtn.addEventListener("click", contactClick)
hireMe.addEventListener("click", contactClick)
Menu.addEventListener("click", HamburgerMenu);

let opened = false;
function HamburgerMenu(){
    if (opened) {
        document.getElementsByClassName("navbar-items")[0].style.display = "none";
        opened = false;
    }else{
        document.getElementsByClassName("navbar-items")[0].style.display = "block";
        opened = true;
    }
}

function aboutMeClick(){
    event.preventDefault();
    let div = document.getElementsByClassName("aboutMe")[0];
    let cloneddiv = div.cloneNode(true);
    let showitems = document.getElementsByClassName("showitems")[0];
    let onHold = document.getElementsByClassName("onHold")[0];
    while (showitems.firstChild) {
        showitems.firstChild.remove();
    }
    onHold.appendChild(cloneddiv);
    showitems.appendChild(div);
    setTimeout(function (){
        div.classList.add("fade-in");
    },250);
    let hero = document.getElementsByClassName("hero")[0];
    hero.style.opacity = "0";
    StartTyping();
}


function heroClick(){
    event.preventDefault();
    let div = document.getElementsByClassName("hero")[0];
    let cloneddiv = div.cloneNode(true);
    let showitems = document.getElementsByClassName("showitems")[0];
    let onHold = document.getElementsByClassName("onHold")[0];
    while (showitems.firstChild) {
        showitems.firstChild.remove();
    }
    onHold.appendChild(cloneddiv);
    showitems.appendChild(div);
    setTimeout(function (){
        div.classList.add("opacity-animation");
    },250);
}


function projectsClick(){
    event.preventDefault();
    let div = document.getElementsByClassName("projects")[0];
    let cloneddiv = div.cloneNode(true);
    let showitems = document.getElementsByClassName("showitems")[0];
    let onHold = document.getElementsByClassName("onHold")[0];
    while (showitems.firstChild) {
        showitems.firstChild.remove();
    }
    onHold.appendChild(cloneddiv);
    showitems.appendChild(div);
    setTimeout(function (){
        div.classList.add("fade-in");
    },250);
    let hero = document.getElementsByClassName("hero")[0];
    hero.style.opacity = "0";
}


function contactClick(){
    event.preventDefault();
    let div = document.getElementsByClassName("form")[0];
    let cloneddiv = div.cloneNode(true);
    let showitems = document.getElementsByClassName("showitems")[0];
    let onHold = document.getElementsByClassName("onHold")[0];
    while (showitems.firstChild) {
        showitems.firstChild.remove();
    }
    onHold.appendChild(cloneddiv);
    showitems.appendChild(div);
    setTimeout(function (){
        div.classList.add("fade-in");
        div.classList.add("opacity-animation");
    },250);
    let hero = document.getElementsByClassName("hero")[0];
    hero.style.opacity = "0";
}


// Typing Json Code 

var CharacterPos = 0;
var MsgBuffer = "";
var TypeDelay = 10; 
var NxtMsgDelay = 60000;
var MsgIndex = 0;
var delay;
var MsgArray = ["\"Person\": {  \n    \"firstName\": \"Anouar\",\n    \"lastName\": \"Andichi\",\n    \"gender\": \"man\",\n    \"age\": 24,\n    \"address\": {\n        \"city\": \"Hasselt\",\n        \"Country\": \"Belguim\"\n    },\n    \"phoneNumbers\": [\n        { \"type\": \"Work\", \"number\": \"+32494997975\"}\n    ],\n    \"More\":{\n           \"Since beginning my journey as a freelance Web Developer nearly 3 years ago, \n            I've done remote work for agencies, consulted for startups, and collaborated with\n            talented people to create digital products for both business and consumer use. \n            I'm quietly confident, naturally curious, and perpetually working on improving my\n            skils in web & desktop devplopment. \"\n  }\n}  "];

function StartTyping() {
    var id = document.getElementById("typing-text");
    if (CharacterPos != MsgArray[MsgIndex].length) {
       MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
       id.value = MsgBuffer+"_";
       delay = TypeDelay;
       id.scrollTop = id.scrollHeight; 
    } else {
       delay = NxtMsgDelay;
       MsgBuffer   = "";
       CharacterPos = -1;
       if (MsgIndex!=MsgArray.length-1){
         MsgIndex++;
       }else {
         MsgIndex = 0;
       }
     }
     CharacterPos++;
     setTimeout(StartTyping,delay);
 }
}

