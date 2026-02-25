
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Auto Slider
let slides=document.querySelectorAll(".slider img");
let index=0;

function showSlide(){
slides.forEach(img=>img.classList.remove("active"));
slides[index].classList.add("active");
index=(index+1)%slides.length;
}

setInterval(showSlide,3000);