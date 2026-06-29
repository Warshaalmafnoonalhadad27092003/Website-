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
}

});
