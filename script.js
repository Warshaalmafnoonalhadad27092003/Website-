/* ==========================================
   AL FUNOON STEEL WORKS
   script.js - Part 1
========================================== */

// Current Language
let currentLanguage = "en";

// Language Button
const languageButton = document.getElementById("langBtn");

if (languageButton) {

languageButton.addEventListener("click", () => {

if(currentLanguage==="en"){

currentLanguage="ar";

languageButton.innerHTML="English";

document.documentElement.lang="ar";

translateArabic();

}else{

currentLanguage="en";

languageButton.innerHTML="العربية";

document.documentElement.lang="en";

translateEnglish();

}

});

}

// English

function translateEnglish(){

document.title="Al Funoon Steel Works";

document.querySelector(".hero h2").innerHTML="Professional Welding & Fabrication";

document.querySelector(".hero p").innerHTML="Steel Doors • Gates • Windows • Railings • Custom Fabrication";

}

// Arabic

function translateArabic(){

document.title="ورشة الفنون للحدادة";

document.querySelector(".hero h2").innerHTML="الحدادة واللحام الاحترافي";

document.querySelector(".hero p").innerHTML="أبواب حديد • بوابات • نوافذ • درابزين • تصنيع معدني";

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>100){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.boxShadow="none";
/* ==========================================
   SCRIPT.JS PART 2
   Gallery • Scroll • WhatsApp • Effects
========================================== */

// ===== Gallery Image Zoom =====

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`
<div class="lightbox-content">
<img src="${img.src}">
<span class="close">&times;</span>
</div>
`;

document.body.appendChild(overlay);

overlay.querySelector(".close").onclick=()=>{

overlay.remove();

}

overlay.onclick=(e)=>{

if(e.target===overlay){

overlay.remove();

}

}

});

});

// ===== Reveal Animation =====

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// ===== Back To Top =====

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===== Floating WhatsApp =====

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/966536208079";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.id="whatsapp";

document.body.appendChild(whatsapp);

console.log("Al Funoon Steel Works Loaded Successfully");
}
/* ==========================================
   SCRIPT.JS PART 3
========================================== */

// ===== Loading Screen =====

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

// ===== Active Navigation =====

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===== Counter Animation =====

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/150;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,15);

}else{

counter.innerText=target;

}

}

updateCounter();
/* ==========================================
   SCRIPT.JS PART 4
   Premium Features
========================================== */

// ======================
// Auto Image Slider
// ======================

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index){

if(slides.length===0) return;

slides.forEach(slide=>{

slide.style.display="none";

});

slides[index].style.display="block";

}

function nextSlide(){

if(slides.length===0) return;

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

showSlide(currentSlide);

setInterval(nextSlide,4000);


// ======================
// Gallery Filter
// ======================

const filterButtons=document.querySelectorAll(".filter-btn");

const galleryItems=document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

const filter=button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else{

if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

}

});

});

});


// ======================
// Lazy Loading
// ======================

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.src=img.dataset.src || img.src;

observer.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});


// ======================
// Current Year Footer
// ======================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}


// ======================
// Page Loaded
// ======================

console.log("Premium Website Loaded Successfully");
});/* ==========================================
   SCRIPT.JS PART 5 (FINAL)
   Final Features & Validation
========================================== */

// ===== Contact Form Validation =====

const form = document.querySelector("#contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.querySelector("#name").value.trim();
const phone=document.querySelector("#phone").value.trim();
const message=document.querySelector("#message").value.trim();

if(name==="" || phone==="" || message===""){

alert("Please fill all required fields.");

return;

}

alert("Thank you! Your request has been submitted.");

form.reset();

});

}

// ===== Fade Animation =====

const hiddenElements=document.querySelectorAll(".hidden");

const fadeObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>{

fadeObserver.observe(el);

});

// ===== Button Hover Effect =====

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn
});
