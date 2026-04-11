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

/*||||||||||||||||||||||||||||||||||||hamburger nav bar |||||||||||||||||||||||||||||||||||||||||||||*/
const btn = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenuList');

btn.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove('active');
    }
});

/*|||||||||||||||||||||||||||||||||||Loading animation||||||||||||||||||||||||||||||||*/

window.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector('.content h1');
    if (h1) {
        const text = h1.innerText;
        h1.innerHTML = "";

        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.classList.add("letter");
            span.innerHTML = char === " " ? "&nbsp;" : char;
            span.style.transitionDelay = (index * 0.03) + "s";
            h1.appendChild(span);
        });
    }
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    const img = document.querySelector(".home_image");
    const nav = document.querySelector(".navbar");
    const jumpText = document.querySelector(".jump-text");
    const h1 = document.querySelector(".content h1");
    const typingDiv = document.querySelector(".animated-text");
    const p = document.querySelector(".content p");
    const btns = document.querySelector(".hero-content-wrapper > .btn");
    const socials = document.querySelector(".hero-content-wrapper > .socials");

    setTimeout(() => {
        if(loader) loader.classList.add("loader-hidden");

        setTimeout(() => {
            if(img) img.classList.add("reveal-active");

            setTimeout(() => {
                if(nav) nav.classList.add("reveal-active");
                if(jumpText) jumpText.classList.add("reveal-active");
            }, 400);

            setTimeout(() => {
                if(h1) h1.classList.add("reveal-now");
            }, 600);

            setTimeout(() => {
                if(typingDiv) typingDiv.classList.add("reveal-active");
            }, 1000);

            setTimeout(() => {
                if(p) p.classList.add("reveal-active");
            }, 1300);

            setTimeout(() => {
                if(btns) btns.classList.add("reveal-active");
                if(socials) socials.classList.add("reveal-active");
            }, 1600);

        }, 400);

        setTimeout(() => { if(loader) loader.style.display = "none"; }, 1200);
    }, 1500);
});