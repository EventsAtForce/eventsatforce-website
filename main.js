//Navigation Button Carousel-1 Section-1

const left = document.querySelector('.arrow-left-1');
const right = document.querySelector('.arrow-right-1');
const slider = document.querySelector('.slides-container');
const images = document.querySelectorAll('.image');

let slideNumber = 1;
const length = images.length;

//Navigation Dots Carousel-1 Section

const navdots = document.querySelector('.nav-dots');

for(let i = 0; i < length; i++){
    const div = document.createElement('div');
    div.className = 'dot';
    navdots.appendChild(div);
}

const dots = document.querySelectorAll('.dot');

dots[0] .style.backgroundColor = 'black';

//Changing Slide on Dot Click
const resetBg = () => {
    dots.forEach(dot => {
        dot.style.backgroundColor = '#afafaf';
    });
};

//Changing Slide on Dot Click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        resetBg();
        dot.style.backgroundColor = 'black';
        slider.style.transform = `translateX(-${getSlideWidth()*index}px)`;
        slideNumber = index+1;
    });
});

//Changing Dot Color on Slide Change
const changeColor = () => {
    resetBg();
    dots[slideNumber-1].style.backgroundColor = 'black';
}

//Navigation Button Carousel-1 Section-2

// Get the width of a slide
function getSlideWidth() {
    return document.querySelector('.frame').offsetWidth;
  }  


//Next Slide function
const nextSlide = () => {
    slideNumber++;
    slider.style.transform = `translateX(-${getSlideWidth()*(slideNumber-1)}px)`;
};

//Previous Slide function
const prevSlide = () => {
    slider.style.transform = `translateX(-${getSlideWidth()*(slideNumber-2)}px)`;
    slideNumber--;
};

//Get First Slide function
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
        slideNumber = 1;;
};

//Get Last Slide function
const getLastSlide = () => {
    slider.style.transform = `translateX(-${getSlideWidth()*(length-1)}px)`;
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

//Auto Slide Changing

//Reel Carousel Section 

const reel = (document.querySelectorAll('.reel'));
const leftReel = document.querySelector('.arrow-left-2');
const rightReel = document.querySelector('.arrow-right-2');
const sliderReel = document.querySelector('.reels-container');

let ReelNumber = 1;
const lengthReel = reel.length - 2;

//Navigation Button Carousel-2 Section-1

// Get the width of a Reel
function getReelWidth() {
    return document.querySelector('.reel').offsetWidth;
  }  

//Get the Gap between Reels
function getGap() {
    const flexContainer = document.querySelector('.reels-container');
    const firstElement = flexContainer.firstElementChild;
    const secondElement = firstElement.nextElementSibling;

    if (secondElement) {
        const gap = secondElement.offsetLeft - (firstElement.offsetLeft + firstElement.offsetWidth);
        return gap;
    } else {
        return 0;
    }
}

//Next Reel function
const nextReel = () => {
    ReelNumber++;
    sliderReel.style.transform = `translateX(-${(getReelWidth()*(ReelNumber-1))+(getGap()*(ReelNumber-1))}px)`;
};

//Previous Reel function
const prevReel = () => {
    sliderReel.style.transform = `translateX(-${(getReelWidth()*(ReelNumber-2))+(getGap()*(ReelNumber-2))}px)`;
    ReelNumber--;
};

//Get First Reel function
const getFirstReel = () => {
    sliderReel.style.transform = `translateX(0px)`;
        ReelNumber = 1;
};

//Get Last Reel function
const getLastReel = () => {
    sliderReel.style.transform = `translateX(-${(getReelWidth()*(lengthReel-1))+(getGap()*(lengthReel-1))}px)`;
        ReelNumber = lengthReel;
};

//Reel Changing done using ternary operator 
//Which does the same thing as if else statement

//Reel Changing Right
rightReel.addEventListener('click', () => {
    ReelNumber < lengthReel ? nextReel() : getFirstReel();
});

//Reel Changing Left
leftReel.addEventListener('click', () => {
    ReelNumber > 1 ? prevReel() : getLastReel();
});


