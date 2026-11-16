
/* ==========================================
   PHOTO DATA
========================================== */

const photos = [
    {
        image: "photo1.jpg",
        message: "A beautiful memory to remember forever ❤️"
    },
    {
        image: "photo2.jpg",
        message: "Some moments become our favorite memories 💕"
    },
    {
        image: "photo3.jpg",
        message: "Keep smiling and keep creating memories ✨"
    },
    {
        image: "photo4.jpg",
        message: "Old memories, beautiful feelings and endless smiles ❤️"
    },
    {
        image: "photo5.jpg",
        message: "And this one will always be special 💖"
    }
];

let currentPhoto = 0;
let effectsStarted = false;
let musicStarted = false;


/* ==========================================
   GET HTML ELEMENTS
========================================== */

const intro = document.getElementById("birthdayIntro");
const treeIntro = document.getElementById("treeIntro");
const home = document.getElementById("home");
const message = document.getElementById("message");
const memories = document.getElementById("memories");
const final = document.getElementById("final");

const heartTree = document.getElementById("heartTree");
const branchHearts = document.getElementById("branchHearts");
const introPetals = document.getElementById("introPetals");
const treeStars = document.getElementById("treeStars");

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");


/* ==========================================
   INTRO HEARTS / SPARKLES
========================================== */

function createIntroPetals() {

    for (let i = 0; i < 32; i++) {

        const petal = document.createElement("span");

        petal.className = "intro-petal";

        const symbols = ["♥", "♡", "✦", "•"];

        petal.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        petal.style.left = (10 + Math.random() * 80) + "%";
        petal.style.top = (8 + Math.random() * 78) + "%";

        petal.style.fontSize =
            (7 + Math.random() * 15) + "px";

        petal.style.animationDelay =
            (Math.random() * 3) + "s";

        petal.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        introPetals.appendChild(petal);
    }
}

createIntroPetals();


/* ==========================================
   BEAUTIFUL HEART-SHAPED TREE CANOPY
========================================== */

function createHeartTree() {

    heartTree.innerHTML = "";

    // More hearts for a fuller tree

    const totalHearts =
        window.innerWidth <= 600 ? 170 : 280;

    // Beautiful pink colour collection

    const colors = [
        "#ff1744",
        "#ff2e75",
        "#ff3d83",
        "#ff5798",
        "#ff6fa7",
        "#ff85b5",
        "#ff9fc5",
        "#ffc0d8",
        "#ffd6e5"
    ];

    for (let i = 0; i < totalHearts; i++) {

        const heart = document.createElement("span");

        heart.className = "tree-heart";
        heart.innerHTML = "♥";

        let x, y;
        let attempts = 0;

        /*
           Mathematical heart shape.

           This creates a proper heart-shaped
           canopy instead of a random circle.
        */

        do {

            x = Math.random() * 2 - 1;
            y = Math.random() * 2 - 1;

            attempts++;

        } while (
            Math.pow(x * x + y * y - 1, 3)
            - x * x * y * y * y > 0 &&
            attempts < 1000
        );

        /*
           Position hearts inside the canopy.
           The canopy is wider in the middle
           and narrower at the bottom.
        */

        const screenX = 50 + x * 31;
        const screenY = 30 - y * 24;

        heart.style.left = screenX + "%";
        heart.style.top = screenY + "%";

        /*
           Different sizes create depth.
        */

        const size = 7 + Math.random() * 12;

        heart.style.fontSize = size + "px";

        /*
           Random pink shades.
        */

        heart.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        /*
           Different opacity creates
           a natural layered appearance.
        */

        heart.style.opacity =
            (0.65 + Math.random() * 0.35).toFixed(2);

        /*
           Slight rotation makes the
           arrangement look more natural.
        */

        const rotation = Math.random() * 50 - 25;

        heart.style.transform =
            `rotate(${rotation}deg)`;

        /*
           Hearts appear gradually.
        */

        heart.style.animationDelay =
            (i * 0.018) + "s";

        /*
           Small movement.
        */

        heart.style.setProperty(
            "--drift",
            ((Math.random() - 0.5) * 7) + "px"
        );

        /*
           Different layers.
        */

        heart.style.zIndex =
            Math.floor(screenY);

        heartTree.appendChild(heart);
    }
}


/* ==========================================
   HEARTS ON TREE BRANCHES
========================================== */

function createBranchHearts() {

    branchHearts.innerHTML = "";

    const positions = [

        // Left branches
        [21, 22, 20],
        [29, 31, 16],
        [20, 44, 14],
        [35, 36, 15],

        // Upper branches
        [37, 22, 13],
        [45, 17, 15],
        [47, 32, 15],
        [51, 12, 13],

        // Right branches
        [68, 20, 20],
        [61, 31, 15],
        [72, 41, 15],
        [77, 32, 13],

        // Inner branches
        [54, 24, 14],
        [30, 46, 12],
        [76, 46, 12],
        [43, 42, 13]

    ];

    positions.forEach(function (p, index) {

        const heart = document.createElement("span");

        heart.className = "branch-heart";
        heart.innerHTML = "♥";

        heart.style.left = p[0] + "%";
        heart.style.top = p[1] + "%";
        heart.style.fontSize = p[2] + "px";

        heart.style.animationDelay =
            (2 + index * 0.12) + "s";

        branchHearts.appendChild(heart);
    });
}


/* ==========================================
   TREE STARS
========================================== */

function createTreeStars() {

    treeStars.innerHTML = "";

    for (let i = 0; i < 30; i++) {

        const star = document.createElement("span");

        star.innerHTML = "✦";
        star.className = "tree-star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 75 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.fontSize =
            (7 + Math.random() * 12) + "px";

        treeStars.appendChild(star);
    }
}


/* ==========================================
   MUSIC
========================================== */

function tryStartMusic() {

    if (musicStarted) {
        return;
    }

    music.play()

        .then(function () {

            musicStarted = true;

            musicButton.innerHTML = "🔊 Music";

        })

        .catch(function () {

            musicButton.innerHTML = "🔇 Music";
        });
}


function toggleMusic() {

    if (music.paused) {

        music.play()

            .then(function () {

                musicButton.innerHTML = "🔊 Music";

                musicStarted = true;

            })

            .catch(function () {

                musicButton.innerHTML = "🔇 Music";
            });

    } else {

        music.pause();

        musicButton.innerHTML = "🔇 Music";
    }
}


/* ==========================================
   INTRO → TREE
========================================== */

function startTree() {

    if (!intro.classList.contains("active")) {
        return;
    }

    intro.classList.remove("active");

    treeIntro.classList.add("active");

    createHeartTree();
    createBranchHearts();
    createTreeStars();

    tryStartMusic();

    setTimeout(function () {

        treeIntro.classList.add("tree-ready");

    }, 100);
}


/*
   Automatically show the tree
   after 5.8 seconds.
*/

setTimeout(startTree, 5800);


/*
   Clicking the intro heart
   skips the intro.
*/

const introHeart =
    document.querySelector(".intro-heart-wrap");

if (introHeart) {

    introHeart.addEventListener("click", startTree);
}


/* ==========================================
   TREE → HOME
========================================== */

setTimeout(function () {

    treeIntro.classList.remove("active");

    home.classList.add("active");

    startCelebration();

}, 12500);


/* ==========================================
   BIRTHDAY MESSAGE
========================================== */

function startBirthday() {

    home.classList.remove("active");

    message.classList.add("active");

    tryStartMusic();

    startCelebration();
}


/* ==========================================
   MEMORIES
========================================== */

function showMemories() {

    message.classList.remove("active");

    memories.classList.add("active");

    createDots();
}


/* ==========================================
   FINAL PAGE
========================================== */

function showFinal() {

    memories.classList.remove("active");

    final.classList.add("active");

    startCelebration();
}


/* ==========================================
   NEXT PHOTO
========================================== */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    changePhoto();
}


/* ==========================================
   PREVIOUS PHOTO
========================================== */

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    changePhoto();
}


/* ==========================================
   CHANGE PHOTO
========================================== */

function changePhoto() {

    const image =
        document.getElementById("memoryPhoto");

    const photoMessage =
        document.getElementById("photoMessage");

    const counter =
        document.getElementById("photoCounter");

    // Restart photo animation

    image.style.animation = "none";

    void image.offsetWidth;

    // Change image

    image.src = photos[currentPhoto].image;

    // Change message

    photoMessage.innerHTML =
        photos[currentPhoto].message;

    // Change counter

    counter.innerHTML =
        (currentPhoto + 1) + " / " + photos.length;

    // Play animation

    image.style.animation = "photoAppear 0.7s ease";

    updateDots();
}


/* ==========================================
   PHOTO DOTS
========================================== */

function createDots() {

    const dots = document.getElementById("dots");

    dots.innerHTML = "";

    for (let i = 0; i < photos.length; i++) {

        const dot = document.createElement("div");

        dot.classList.add("dot");

        if (i === currentPhoto) {
            dot.classList.add("active");
        }

        dot.onclick = function () {

            currentPhoto = i;

            changePhoto();
        };

        dots.appendChild(dot);
    }
}


/* ==========================================
   UPDATE PHOTO DOTS
========================================== */

function updateDots() {

    const dots = document.querySelectorAll(".dot");

    dots.forEach(function (dot, index) {

        dot.classList.toggle(
            "active",
            index === currentPhoto
        );
    });
}


/* ==========================================
   FLOATING HEARTS
========================================== */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"
    ];

    heart.innerHTML =
        heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 11000);
}


/* ==========================================
   BALLOONS
========================================== */

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");

    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.fontSize =
        (40 + Math.random() * 30) + "px";

    balloon.style.animationDuration =
        (7 + Math.random() * 6) + "s";

    document.body.appendChild(balloon);

    setTimeout(function () {

        balloon.remove();

    }, 15000);
}


/* ==========================================
   SPARKLES
========================================== */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML = "✦";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        (10 + Math.random() * 20) + "px";

    document.body.appendChild(sparkle);

    setTimeout(function () {

        sparkle.remove();

    }, 2000);
}


/* ==========================================
   START CELEBRATION
========================================== */

function startCelebration() {

    if (effectsStarted) {
        return;
    }

    effectsStarted = true;

    // Floating hearts

    setInterval(createFloatingHeart, 700);

    // Balloons

    setInterval(createBalloon, 2600);

    // Sparkles

    setInterval(createSparkle, 800);

    // Initial balloons

    for (let i = 0; i < 12; i++) {

        setTimeout(createBalloon, i * 150);
    }

    // Initial hearts

    for (let i = 0; i < 25; i++) {

        setTimeout(createFloatingHeart, i * 80);
    }

    // Initial sparkles

    for (let i = 0; i < 30; i++) {

        setTimeout(createSparkle, i * 70);
    }
}


/* ==========================================
   KEYBOARD CONTROLS
========================================== */

document.addEventListener("keydown", function (event) {

    // Left arrow = previous photo

    if (
        event.key === "ArrowLeft" &&
        memories.classList.contains("active")
    ) {

        previousPhoto();
    }

    // Right arrow = next photo

    if (
        event.key === "ArrowRight" &&
        memories.classList.contains("active")
    ) {

        nextPhoto();
    }

    // Space = music

    if (
        event.code === "Space" &&
        event.target.tagName !== "BUTTON"
    ) {

        event.preventDefault();

        toggleMusic();
    }

});
