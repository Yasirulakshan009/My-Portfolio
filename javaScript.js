const textElement = document.getElementById("typing-text");
const words = ["Undergraduate Student","Web Developer", "UI/UX Designer", "Frontend Developer"];
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

document.addEventListener("DOMContentLoaded", type);