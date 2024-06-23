let nextButton = document.querySelector(".next");
let slider = document.querySelector(".slider");
let slides = document.querySelector(".slides");
let images = document.querySelectorAll("img");
let totalSlides = images.length;
let currentSlide = 0;







nextButton.addEventListener("click", ()=>{
   
    currentSlide++;
    console.log(slides.style.transform = `translateX(-${currentSlide * 100}%)`);
    slides.style.transition = `0.5s`;

   if(currentSlide == totalSlides){

    slides.style.transform = `translateX(0%)`;
     currentSlide=0;
   
   }

})



let prevButton = document.querySelector(".prev");






prevButton.addEventListener("click", ()=>{
  


});
