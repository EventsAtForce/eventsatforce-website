//Navigation Button Section-1

const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slider = document.querySelector('.slides-container');
const images = document.querySelectorAll('.image');

let slideNumber = 1;
const length = images.length;

//Next Slide function
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber*1240}px)`;
    slideNumber++;
};

//Previous Slide function
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2)*1240}px)`;
    slideNumber--;
};

//Get First Slide function
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
        slideNumber = 1;;
};

//Get Last Slide function
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*1240}px)`;
        slideNumber = length;;
};

//Slide Changing done using ternary operator 
//Which does the same thing as if else statement

//Slide Changing Right
right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor();
});

//Slide Changing Left
left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
});

