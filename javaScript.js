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

