/* ===========================
   TYPING ANIMATION
=========================== */

const words = [
    "Data Analyst",
    "Web Developer",
    "Python Programmer",
    "SQL Enthusiast",
    "Power BI Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);
    }

    let speed = 120;

    if (isDeleting) speed = 70;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length)
            wordIndex = 0;
    }

    setTimeout(typeEffect, speed);

}

typeEffect();


/* ===========================
   STICKY NAVBAR
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }

    else {

        header.style.background = "rgba(255,255,255,.9)";
        header.style.boxShadow = "none";

    }

});


/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===========================
   SMOOTH SCROLL
=========================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===========================
   BUTTON HOVER EFFECT
=========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});
/* ===========================
   CONTACT FORM VALIDATION
=========================== */

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent="";
    document.getElementById("emailError").textContent="";
    document.getElementById("subjectError").textContent="";
    document.getElementById("messageError").textContent="";

    if(name===""){
        document.getElementById("nameError").textContent="Enter your name";
        valid=false;
    }

    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        document.getElementById("emailError").textContent="Enter valid email";
        valid=false;
    }

    if(subject===""){
        document.getElementById("subjectError").textContent="Enter subject";
        valid=false;
    }

    if(message.length<10){
        document.getElementById("messageError").textContent="Minimum 10 characters";
        valid=false;
    }

    if(valid){

        alert("Message Sent Successfully!");

        form.reset();

    }

});

}


/* ===========================
   DARK MODE
=========================== */

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";
darkBtn.style.left="25px";
darkBtn.style.bottom="25px";
darkBtn.style.width="50px";
darkBtn.style.height="50px";
darkBtn.style.borderRadius="50%";
darkBtn.style.border="none";
darkBtn.style.cursor="pointer";
darkBtn.style.fontSize="22px";
darkBtn.style.background="#7c3aed";
darkBtn.style.color="#fff";
darkBtn.style.zIndex="1000";

document.body.appendChild(darkBtn);

let dark=false;

darkBtn.onclick=function(){

dark=!dark;

if(dark){

document.body.style.background="#0f172a";
document.body.style.color="white";
darkBtn.innerHTML="☀️";

}

else{

document.body.style.background="linear-gradient(135deg,#eef2ff,#dbeafe,#ffffff)";
document.body.style.color="#222";
darkBtn.innerHTML="🌙";

}

};


/* ===========================
   SKILL BAR ANIMATION
=========================== */

const skillBars=document.querySelectorAll(".progress div");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.animation="grow 2s forwards";

}

});

});

skillBars.forEach(bar=>observer.observe(bar));


const style=document.createElement("style");

style.innerHTML=`

@keyframes grow{

from{

width:0%;

}

}

`;

document.head.appendChild(style);


/* ===========================
   FADE IN ON SCROLL
=========================== */

const cards=document.querySelectorAll(

".project-card,.education-card,.about-text,.skill"

);

const reveal=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".8s";

reveal.observe(card);

});


/* ===========================
   FOOTER YEAR
=========================== */

const year=document.querySelector(".copyright");

if(year){

year.innerHTML="© "+new Date().getFullYear()+" Bhavya Sri Yalamanchi | All Rights Reserved.";

}


/* ===========================
   GREETING
=========================== */

const hour=new Date().getHours();

let greet="";

if(hour<12){

greet="Good Morning";

}

else if(hour<17){

greet="Good Afternoon";

}

else{

greet="Good Evening";

}

console.log(greet+" Bhavya Sri");


/* ===========================
   IMAGE HOVER
=========================== */

const image=document.querySelector(".home-image img");

if(image){

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08) rotate(-2deg)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

}


/* ===========================
   PAGE LOADER
=========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";
document.body.style.opacity="1";

},200);

});


/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("Portfolio Loaded Successfully");
console.log("Developed by Bhavya Sri Yalamanchi");
