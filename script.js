/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================
   WELCOME SECTION
========================= */

function startSurprise() {

    showScreen("funny");

}


/* =========================
   FUNNY SECTION
========================= */

function showMemories() {

    showScreen("memories");

}


/* =========================
   PHOTO GALLERY
========================= */

// All five photographs

const photos = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];


// Select the gallery

const gallery = document.getElementById("photoGallery");


// Add photographs automatically

photos.forEach((photo, index) => {

    const img = document.createElement("img");

    img.src = `images/${photo}`;

    img.alt = `Our Memory ${index + 1}`;

    img.loading = "lazy";

    img.onclick = function() {

        openPhoto(this.src);

    };

    // Display an error if an image cannot load

    img.onerror = function() {

        console.error("Image not found:", this.src);

        this.alt = "Photo could not be loaded";

    };

    gallery.appendChild(img);

});



/* =========================
   PHOTO VIEWER
========================= */

function openPhoto(imageSrc) {

    const viewer = document.getElementById("photoViewer");

    const expandedPhoto = document.getElementById("expandedPhoto");

    expandedPhoto.src = imageSrc;

    viewer.style.display = "flex";

}


function closePhoto() {

    document.getElementById("photoViewer").style.display = "none";

}


// Close viewer by clicking outside the image

document.getElementById("photoViewer").addEventListener(

    "click",

    function(event) {

        if (event.target === this) {

            closePhoto();

        }

    }

);


// Close viewer using Escape key

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

    }

});



/* =========================
   VIDEO SECTION
========================= */

function showVideos() {

    showScreen("videos");

}



/* =========================
   CAKE SECTION
========================= */

function showCake() {

    showScreen("cake");

}



/* =========================
   BLOW CANDLES
========================= */

let candlesBlown = false;

function blowCandles() {

    if (candlesBlown) {

        return;

    }

    candlesBlown = true;

    const wishMessage = document.getElementById("wishMessage");

    const button = document.getElementById("candleButton");

    wishMessage.innerHTML =

        "✨ Your wish has been sent to the universe! ✨";

    button.disabled = true;

    button.innerText = "Wish Granted! ❤️";

    launchConfetti();

    setTimeout(() => {

        showScreen("final");

    }, 3500);

}



/* =========================
   CONFETTI ANIMATION
========================= */

function launchConfetti() {

    const emojis = [

        "🎉",

        "🎊",

        "💗",

        "✨",

        "🎈",

        "🥳"

    ];


    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =

            emojis[Math.floor(Math.random() * emojis.length)];


        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =

            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";


        document.body.appendChild(confetti);


        const duration = 2000 + Math.random() * 3000;


        confetti.animate(

            [

                {

                    transform: "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:

                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,

                    opacity: 0

                }

            ],

            {

                duration: duration,

                easing: "ease-in"

            }

        );


        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}



/* =========================
   RESTART WEBSITE
========================= */

function restartWebsite() {

    candlesBlown = false;

    document.getElementById("wishMessage").innerHTML = "";

    const button = document.getElementById("candleButton");

    button.disabled = false;

    button.innerText = "Blow The Candles! 🕯️";

    showScreen("welcome");

}