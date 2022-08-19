function slideplugin(activeslide=2){
    const slides=document.querySelectorAll('.img');
    slides[activeslide].classList.add("active");

    for(const slide of slides){
        slide.addEventListener("mouseover",()=>{
            clearActiveSlides();
            slide.classList.add("active");
            console.log("click");
        });
    }
    function clearActiveSlides(){
    slides.forEach(slide => {
            slide.classList.remove("active");
        });
    }
}
slideplugin();