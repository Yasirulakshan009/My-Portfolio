const textElement = document.getElementById("typing-text");
const words = ["Web Developer", "UI/UX Designer", "Frontend Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
        typeSpeed = 100;
    } else {
        charIndex++;
        typeSpeed = 150;
    }

    textElement.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500;
    }
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
document.addEventListener("DOMContentLoaded", type);

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    let isAtTop = false;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const scrollPosition = window.scrollY;


        if (scrollPosition >= sectionTop - 10 && scrollPosition <= sectionTop + 10) {
            isAtTop = true;
        }
    });

    if (isAtTop || window.scrollY < 10) {
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.add("scrolled");
    }
});
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".project-display");
    const leftContents = document.querySelectorAll(".left-content");
    const rightContents = document.querySelectorAll(".right-content");
    const nextBtn = document.querySelector(".right-slide-btn");
    const prevBtn = document.querySelector(".left-slide-btn");

    let currentIndex = 0;

    function updateSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        leftContents.forEach(l => l.classList.remove("active"));
        rightContents.forEach(r => r.classList.remove("active"));

        if (index >= slides.length) currentIndex = 0;
        if (index < 0) currentIndex = slides.length - 1;

        slides[currentIndex].classList.add("active");
        leftContents[currentIndex].classList.add("active");
        rightContents[currentIndex].classList.add("active");
    }

    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex++;
        updateSlide(currentIndex);
    });

    prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex--;
        updateSlide(currentIndex);
    });
});