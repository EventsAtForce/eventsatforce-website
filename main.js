//Navigation Button Section-1

const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.img');

let slideNumber = 1;
const length = images.length;

//Navigation Dots Section

const bottom = document.querySelector('.bottom');

for(let i = 0; i < length; i++){
    const div = document.createElement('div');
    div.className = 'dot';
    bottom.appendChild(div);
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
        slider.style.transform = `translateX(-${index*1240}px)`;
        slideNumber = index+1;
    });
});

//Changing Dot Color on Slide Change
const changeColor = () => {
    resetBg();
    dots[slideNumber-1].style.backgroundColor = 'black';
}

//Navigation Button Section-2

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

