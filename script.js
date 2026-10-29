/* =========================================================
   ♣ CLARK'S MAGIC PORTFOLIO
   PREMIUM MAGIC SCRIPT
   ========================================================= */


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "♣ Welcome to Clark's Magic Kingdom"
    );

    initializePortfolio();

});


/* =========================================================
   MAIN INITIALIZATION
========================================================= */

function initializePortfolio() {

    startIntro();

    startMagicParticles();

    startCursorMagic();

    startClickMagic();

    startScrollReveal();

    startActiveNavigation();

    startProjectEffects();

    startTypingEffect();

}


/* =========================================================
   GRIMOIRE INTRO
========================================================= */

function startIntro() {

    const intro =
        document.getElementById("intro");

    if (!intro) return;


    document.body.style.overflow = "hidden";


    /*
       Intro sequence:

       0s     Magic circle
       0.5s   Grimoire appears
       2.5s   Grimoire opens
       4.3s   Magic burst
       4.4s   Welcome text
       7s     Portfolio appears
    */


    setTimeout(() => {

        createIntroParticles();

    }, 1200);


    setTimeout(() => {

        createIntroParticles();

    }, 2600);


    setTimeout(() => {

        createIntroParticles();

    }, 4200);


    setTimeout(() => {

        intro.classList.add(
            "hide-intro"
        );

        document.body.style.overflow =
            "auto";

    }, 7000);

}


/* =========================================================
   INTRO PARTICLES
========================================================= */

function createIntroParticles() {

    const intro =
        document.getElementById("intro");

    if (!intro) return;


    const rect =
        intro.getBoundingClientRect();


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "magic-particle";


        const x =
            rect.width / 2 +
            (Math.random() * 300 - 150);


        const y =
            rect.height / 2 +
            (Math.random() * 250 - 125);


        particle.style.left =
            x + "px";


        particle.style.top =
            y + "px";


        particle.style.setProperty(
            "--x",
            (Math.random() * 300 - 150) + "px"
        );


        particle.style.setProperty(
            "--y",
            (Math.random() * 300 - 150) + "px"
        );


        intro.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1100);

    }

}


/* =========================================================
   MAGIC PARTICLE GENERATOR
========================================================= */

function createMagicParticle(
    x,
    y,
    amount = 1
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "magic-particle";


        particle.style.left =
            x + "px";


        particle.style.top =
            y + "px";


        const randomX =
            Math.random() * 180 - 90;


        const randomY =
            Math.random() * 180 - 90;


        particle.style.setProperty(
            "--x",
            randomX + "px"
        );


        particle.style.setProperty(
            "--y",
            randomY + "px"
        );


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1000);

    }

}


/* =========================================================
   BACKGROUND MAGIC PARTICLES
========================================================= */

function startMagicParticles() {

    setInterval(() => {

        const x =
            Math.random() *
            window.innerWidth;


        const y =
            Math.random() *
            window.innerHeight;


        createMagicParticle(
            x,
            y,
            1
        );

    }, 1400);

}


/* =========================================================
   CURSOR MAGIC
========================================================= */

function startCursorMagic() {

    let lastX = 0;
    let lastY = 0;


    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                event.clientX;


            const y =
                event.clientY;


            const distance =
                Math.sqrt(
                    Math.pow(x - lastX, 2) +
                    Math.pow(y - lastY, 2)
                );


            if (distance > 25) {

                createCursorSpark(
                    x,
                    y
                );


                lastX = x;
                lastY = y;

            }

        }
    );

}


/* =========================================================
   CURSOR SPARK
========================================================= */

function createCursorSpark(
    x,
    y
) {

    const spark =
        document.createElement("div");


    spark.className =
        "cursor-spark";


    spark.style.left =
        x + "px";


    spark.style.top =
        y + "px";


    document.body.appendChild(
        spark
    );


    setTimeout(() => {

        spark.remove();

    }, 500);

}


/* =========================================================
   CLICK MAGIC
========================================================= */

function startClickMagic() {

    document.addEventListener(
        "click",
        (event) => {

            createClickCircle(
                event.clientX,
                event.clientY
            );


            createMagicParticle(
                event.clientX,
                event.clientY,
                10
            );

        }
    );

}


/* =========================================================
   CLICK MAGIC CIRCLE
========================================================= */

function createClickCircle(
    x,
    y
) {

    const circle =
        document.createElement(
            "div"
        );


    circle.className =
        "click-magic-circle";


    circle.style.left =
        x + "px";


    circle.style.top =
        y + "px";


    document.body.appendChild(
        circle
    );


    setTimeout(() => {

        circle.remove();

    }, 1000);

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function startScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        !("IntersectionObserver"
        in window)
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "active"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function startActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section, .hero"
        );


    const navLinks =
        document.querySelectorAll(
            "nav a"
        );


    if (!sections.length) return;


    window.addEventListener(
        "scroll",
        () => {

            let current =
                "home";


            sections.forEach(
                section => {

                    const sectionTop =
                        section.offsetTop -
                        180;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.id;

                    }

                }
            );


            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );


                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        href ===
                        "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );


    /*
       Smooth navigation
    */

    navLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                (event) => {

                    const target =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !target ||
                        target === "#"
                    ) return;


                    const section =
                        document.querySelector(
                            target
                        );


                    if (!section) return;


                    event.preventDefault();


                    section.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });

                }
            );

        }
    );

}


/* =========================================================
   PROJECT MAGIC EFFECT
========================================================= */

function startProjectEffects() {

    const cards =
        document.querySelectorAll(
            ".project-card"
        );


    cards.forEach(
        card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    card.classList.add(
                        "magic-active"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.classList.remove(
                        "magic-active"
                    );

                }
            );


            card.addEventListener(
                "click",
                () => {

                    card.classList.add(
                        "magic-active"
                    );


                    const rect =
                        card.getBoundingClientRect();


                    createMagicParticle(
                        rect.left +
                        rect.width / 2,

                        rect.top +
                        rect.height / 2,

                        8
                    );


                    setTimeout(() => {

                        card.classList.remove(
                            "magic-active"
                        );

                    }, 700);

                }
            );

        }
    );

}


/* =========================================================
   TYPING EFFECT
========================================================= */

function startTypingEffect() {

    const typing =
        document.querySelector(
            ".typing-text"
        );


    if (!typing) return;


    const text =
        typing.textContent.trim();


    typing.textContent = "";


    let index = 0;


    function type() {

        if (
            index <
            text.length
        ) {

            typing.textContent +=
                text.charAt(index);


            index++;


            setTimeout(
                type,
                45
            );

        }

    }


    setTimeout(
        type,
        7200
    );

}


/* =========================================================
   MAGIC MESSAGE
========================================================= */

function magicMessage() {

    createMagicBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );


    setTimeout(() => {

        alert(
            "♣ MAGIC ACTIVATED ♣\n\n" +
            "Your magical power is growing..."
        );

    }, 250);

}


/* =========================================================
   MAGIC BURST
========================================================= */

function createMagicBurst(
    x,
    y
) {

    createMagicParticle(
        x,
        y,
        30
    );


    const circle =
        document.createElement(
            "div"
        );


    circle.className =
        "click-magic-circle";


    circle.style.left =
        x + "px";


    circle.style.top =
        y + "px";


    circle.style.width =
        "40px";


    circle.style.height =
        "40px";


    document.body.appendChild(
        circle
    );


    setTimeout(() => {

        circle.remove();

    }, 1000);

}


/* =========================================================
   GRIMOIRE KEYBOARD EFFECT
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
           Press G to summon magic.
        */

        if (
            event.key.toLowerCase()
            === "g"
        ) {

            createMagicBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }

    }
);


/* =========================================================
   MAGICAL PARALLAX
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(
                ".hero-content"
            );


        if (!hero) return;


        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            hero.style.transform =
                `translateY(${scroll * 0.12}px)`;

            hero.style.opacity =
                Math.max(
                    0,
                    1 - scroll / 650
                );

        }

    }
);


/* =========================================================
   MOBILE TOUCH MAGIC
========================================================= */

document.addEventListener(
    "touchstart",
    (event) => {

        const touch =
            event.touches[0];


        if (!touch) return;


        createMagicParticle(
            touch.clientX,
            touch.clientY,
            5
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   PREVENT MAGIC EFFECT FROM GOING TOO CRAZY
========================================================= */

let lastMagicTime = 0;


document.addEventListener(
    "mousemove",
    (event) => {

        const now =
            Date.now();


        if (
            now - lastMagicTime <
            70
        ) return;


        lastMagicTime =
            now;

    }
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
`
╔══════════════════════════════════╗
║                                  ║
║       ♣ CLARK'S KINGDOM ♣        ║
║                                  ║
║     GRIMOIRE SYSTEM ONLINE       ║
║                                  ║
║       Welcome, Mage.             ║
║                                  ║
╚══════════════════════════════════╝
`
);


import { supabase } from './supabase.js';

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Pigilan mag-refresh ang pahina

        // Kunin ang mga nilagay ng user
        const name = document.getElementById('visitorName').value;
        const email = document.getElementById('visitorEmail').value;
        const message = document.getElementById('visitorMessage').value;

        formStatus.textContent = "Nagpapalabas ng mahika... Sandali lang.";
        formStatus.style.color = "#ffd700"; // Gold color para sa theme

        try {
            // I-save sa Supabase table na pinangalanang 'messages'
            const { data, error } = await supabase
                .from('messages')
                .insert([{ name: name, email: email, message: message }]);

            if (error) throw error;

            formStatus.textContent = "Tagumpay! Naipadala na ang iyong mensahe sa kaharian.";
            formStatus.style.color = "#00ffcc"; // Magic cyan color
            contactForm.reset(); // Linisin ang form

        } catch (error) {
            console.error('Error sa pag-save:', error.message);
            formStatus.textContent = "Nabigo ang pag-cast ng spell. Subukang muli.";
            formStatus.style.color = "#ff4444"; // Red error color
        }
    });
}