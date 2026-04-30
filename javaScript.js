document.addEventListener("touchstart", function() {}, {passive: true});

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

let currentIndex = 0;

const slides = document.querySelectorAll(".project-display");
const leftContents = document.querySelectorAll(".left-content");
const rightContents = document.querySelectorAll(".right-content");
const leftBtn = document.querySelector(".left-slide-btn");
const rightBtn = document.querySelector(".right-slide-btn");

function updateSlide(index) {
    if (index < 0 || index >= slides.length) return;

    currentIndex = index;

    setTimeout(() => {
        [slides, leftContents, rightContents].forEach(list => {
            list.forEach(item => item.classList.remove("active"));
        });

        slides[currentIndex].classList.add("active");
        leftContents[currentIndex].classList.add("active");
        rightContents[currentIndex].classList.add("active");

        const activeImgContainer = slides[currentIndex].querySelector(".project-image");
        if (activeImgContainer) {
            activeImgContainer.style.animation = 'none';
            activeImgContainer.offsetHeight;
            activeImgContainer.style.animation = null;
        }

        updateButtonStyles();
    }, 400);
}

function updateButtonStyles() {
    leftBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
    leftBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";

    rightBtn.style.opacity = currentIndex === slides.length - 1 ? "0.3" : "1";
    rightBtn.style.pointerEvents = currentIndex === slides.length - 1 ? "none" : "auto";
}

rightBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateSlide(currentIndex + 1);
});

leftBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateSlide(currentIndex - 1);
});

document.addEventListener("DOMContentLoaded", () => {
    updateButtonStyles();
});
/*|||||||||||||||||||||||||||||||||||||||gallery section|||||||||||||||||||||||||||||||||||*/

const lightbox = document.getElementById('lightbox');
const boxImage = document.getElementById('boxImage');
document.querySelectorAll('.grid-item img').forEach(img => {
    img.onclick = () => {
        boxImage.src = img.src;
        lightbox.style.display = 'flex';
    };
});

/*|||||||||||||||||||||||||||||||||||||||||exercise section||||||||||||||||||||||||||||||*/
function openLab(btn) {
    const htmlCode = btn.getAttribute('data-html') || "";
    const cssCode = btn.getAttribute('data-css') || "";
    const jsCode = btn.getAttribute('data-js') || "";

    document.getElementById("html-code").textContent = htmlCode;
    document.getElementById("css-code").textContent = cssCode;
    document.getElementById("js-code").textContent = jsCode;

    document.getElementById("editor-view").classList.add("active");

    updatePreview(htmlCode, cssCode, jsCode);
}

function updatePreview(html, css, js) {
    const preview = document.getElementById("preview");
    const fullStyle = `<style>body{margin:0; padding:20px; font-family:sans-serif;}${css}</style>`;
    const fullScript = `<script>${js}<\/script>`;

    // iframe එක ඇතුළත preview එක නිර්මාණය කිරීම
    preview.srcdoc = `<html><head>${fullStyle}</head><body>${html}${fullScript}</body></html>`;
}

function closeLab() {
    document.getElementById("editor-view").classList.remove("active");
}

/*|||||||||||||||||||contact section||||||||||||||||||||||||||*/

document.querySelector('.contact-details').onsubmit = async (e) => {
    e.preventDefault();

    const btn = document.getElementById('send-btn');
    const toast = document.getElementById('toast-notification');

    btn.innerText = "Sending...";

    const response = await fetch("https://formspree.io/f/xrervjen", {
        method: "POST",
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        toast.classList.add('show');
        e.target.reset();

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    } else {
        alert("Oops! Something went wrong.");
    }

    btn.innerText = "Send Message";
};

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
    const jumpTexts = document.querySelectorAll(".jump-text");
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
                jumpTexts.forEach(text => {
                    text.classList.add("reveal-active");
                });
            }, 500);

            setTimeout(() => {
                if(h1) h1.classList.add("reveal-now");
            }, 600);

            setTimeout(() => {
                if(typingDiv) typingDiv.classList.add("reveal-active");
            }, 1200);

            setTimeout(() => {
                if(p) p.classList.add("reveal-active");
            }, 1600);

            setTimeout(() => {
                if(socials) socials.classList.add("reveal-active");
            }, 1900);

            setTimeout(() => {
                if(btns) btns.classList.add("reveal-active");
            }, 2200);

        }, 500);

        setTimeout(() => {
            if(loader) loader.style.display = "none";
        }, 1200);
    }, 1000);
});

/*||||||||||||||||||||||||||||| scrol animation |||||||||||||||||||||||||||*/
document.addEventListener("DOMContentLoaded", () => {
    // Orbit eka iwara unada kiyala mathaka thiyaganna me variable eka ona wenawa
    let orbitFinished = false;

    // Animation karanna ona hamama elements tika select karagannawa
    const animatedElements = document.querySelectorAll(
        ".about-circle, .about-description, .about-content .btn, .about-content .title, .e-card, .grid-item, .orbit-system, .skill-box, .project-display, .bottom-content, .ex-card "
    );

    // Screen eke scroll karaddi elements penawada kiyala balanna "Observer" ekak hadanawa
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            // --- ORBIT SYSTEM (Screen eke 20% k penena kota) ---
            if (entry.target.classList.contains('orbit-system')) {
                if (entry.intersectionRatio >= 0.2 && !entry.target.classList.contains('show')) {
                    entry.target.classList.add("show"); // Orbit animation eka start karanawa

                    // Orbit eka thappara 1.5 kin iwarai kiyala mark karagannawa
                    setTimeout(() => {
                        orbitFinished = true;
                    }, 1500);
                    scrollObserver.unobserve(entry.target);
                }
                return;
            }

            // --- SKILL BOXES & OTHER ELEMENTS MATHU VEEMA ---
            if (entry.intersectionRatio > 0.1) {
                entry.target.classList.add("show"); // Box eka fade-in wenawa
            }

            // --- PROGRESS BARS (Box eka 95% - 100% penena kota) ---
            if (entry.intersectionRatio >= 0.95) {
                const triggerVisuals = () => {
                    // Orbit eka iwara wenakan balan inna ona progress bars load wenna
                    if (orbitFinished) {
                        if (entry.target.id === "progress-bars-card" && !entry.target.classList.contains('start-bar')) {
                            entry.target.classList.add("start-bar");
                            scrollObserver.unobserve(entry.target);
                        }
                    } else {
                        // Orbit eka thama iwara naththam thawa thappara 0.3 kin ayeth check karanawa
                        setTimeout(triggerVisuals, 300);
                    }
                };
                triggerVisuals();
            }

            // --- CARDS WAGE ANITH GENERAL ELEMENTS ---
            if (entry.isIntersecting && !entry.target.classList.contains('skill-box') && !entry.target.classList.contains('orbit-system')) {
                entry.target.classList.add("show");
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        // Screen eke kora tharamatada meka weda karanna ona kiyala kiyanawa
        threshold: [0.1, 0.2, 0.95]
    });

    // Ham element ekakatama observer eka connect karanawa
    animatedElements.forEach(el => scrollObserver.observe(el));
});

document.querySelectorAll('.project-display').forEach(box => {
    let x = 0;

    box.ontouchstart = e => x = e.touches[0].clientX;

    box.ontouchend = e => {
        let diff = x - e.changedTouches[0].clientX;

        if (Math.abs(diff) > 30) {
            let imgs = box.querySelectorAll('img');
            let srcs = [...imgs].map(i => i.src);

            diff > 0 ? srcs.push(srcs.shift()) : srcs.unshift(srcs.pop());

            imgs.forEach((img, i) => img.src = srcs[i]);
        }
    };
});