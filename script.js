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

        const symbols = [
            "♥",
            "♡",
            "✦",
            "•"
        ];

        petal.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        petal.style.left =
            (10 + Math.random() * 80) + "%";

        petal.style.top =
            (8 + Math.random() * 78) + "%";

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
   IMPROVED HEART TREE
========================================== */

function createHeartTree() {

    heartTree.innerHTML = "";

    /*
       Fewer hearts on mobile so the tree
       doesn't become messy.
    */

    const totalHearts =
        window.innerWidth <= 600
            ? 110
            : 180;


    /*
       Create hearts inside a mathematical
       heart-shaped area.
    */

    for (let i = 0; i < totalHearts; i++) {

        const heart =
            document.createElement("span");

        heart.className = "tree-heart";

        heart.innerHTML = "♥";


        let x;
        let y;


        /*
           Heart equation
        */

        do {

            x = Math.random() * 2 - 1;
            y = Math.random() * 2 - 1;

        } while (
            Math.pow(
                x * x +
                y * y -
                1,
                3
            )
            -
            x * x *
            y * y *
            y > 0
        );


        /*
           Position the hearts.
        */

        const screenX =
            50 + x * 29;

        const screenY =
            27 - y * 22;


        heart.style.left =
            screenX + "%";

        heart.style.top =
            screenY + "%";


        /*
           Random heart size.
        */

        const size =
            8 + Math.random() * 13;

        heart.style.fontSize =
            size + "px";


        /*
           Different pink shades.
        */

        const colors = [
            "#ff3d83",
            "#ff5798",
            "#ff6fa7",
            "#ff8db9",
            "#ffc0d8"
        ];

        heart.style.color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /*
           Hearts appear one after another.
        */

        heart.style.animationDelay =
            (i * 0.025) + "s";


        /*
           Very small movement.
        */

        heart.style.setProperty(
            "--drift",
            ((Math.random() - 0.5) * 5) + "px"
        );


        heartTree.appendChild(heart);
    }
}


/* ==========================================
   HEARTS ON BRANCH TIPS
========================================== */

function createBranchHearts() {

    branchHearts.innerHTML = "";


    /*
       Carefully selected positions
       for the tree branches.
    */

    const positions = [

        [21, 22, 20],
        [29, 31, 16],
        [20, 44, 14],

        [37, 22, 13],
        [45, 17, 12],
        [47, 32, 15],

        [68, 20, 20],
        [61, 31, 15],
        [72, 41, 13],

        [54, 24, 14],
        [30, 46, 12],
        [76, 46, 11]

    ];


    positions.forEach(
        function (p, index) {

            const heart =
                document.createElement("span");

            heart.className =
                "branch-heart";

            heart.innerHTML = "♥";


            heart.style.left =
                p[0] + "%";

            heart.style.top =
                p[1] + "%";

            heart.style.fontSize =
                p[2] + "px";


            heart.style.animationDelay =
                (2.2 + index * 0.15) + "s";


            branchHearts.appendChild(
                heart
            );
        }
    );
}


/* ==========================================
   TREE STARS
========================================== */

function createTreeStars() {

    treeStars.innerHTML = "";


    for (let i = 0; i < 22; i++) {

        const star =
            document.createElement("span");

        star.innerHTML = "✦";

        star.className =
            "tree-star";


        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 75 + "%";


        star.style.animationDelay =
            Math.random() * 3 + "s";


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

            musicButton.innerHTML =
                "🔊 Music";

        })

        .catch(function () {

            /*
               Phone browsers can block
               automatic music.

               User can press the Music button.
            */

            musicButton.innerHTML =
                "🔇 Music";
        });
}


function toggleMusic() {

    if (music.paused) {

        music.play()

            .then(function () {

                musicButton.innerHTML =
                    "🔊 Music";

                musicStarted = true;

            })

            .catch(function () {

                musicButton.innerHTML =
                    "🔇 Music";
            });

    } else {

        music.pause();

        musicButton.innerHTML =
            "🔇 Music";
    }
}


/* ==========================================
   INTRO → TREE
========================================== */

function startTree() {

    /*
       Don't start twice.
    */

    if (
        !intro.classList.contains("active")
    ) {
        return;
    }


    /*
       Hide intro.
    */

    intro.classList.remove("active");


    /*
       Show tree.
    */

    treeIntro.classList.add("active");


    /*
       Create tree elements.
    */

    createHeartTree();

    createBranchHearts();

    createTreeStars();


    /*
       Try to start music.
    */

    tryStartMusic();


    /*
       Start tree animation.
    */

    setTimeout(
        function () {

            treeIntro.classList.add(
                "tree-ready"
            );

        },
        100
    );
}


/*
   Intro automatically changes
   to tree after 5.8 seconds.
*/

setTimeout(
    startTree,
    5800
);


/*
   Clicking the intro heart
   skips the intro.
*/

const introHeart =
    document.querySelector(
        ".intro-heart-wrap"
    );


if (introHeart) {

    introHeart.addEventListener(
        "click",
        startTree
    );
}


/* ==========================================
   TREE → HOME
========================================== */

setTimeout(
    function () {

        treeIntro.classList.remove(
            "active"
        );

        home.classList.add(
            "active"
        );


        /*
           Start balloons,
           hearts and sparkles.
        */

        startCelebration();

    },
    12500
);


/* ==========================================
   BIRTHDAY MESSAGE
========================================== */

function startBirthday() {

    home.classList.remove(
        "active"
    );

    message.classList.add(
        "active"
    );


    tryStartMusic();

    startCelebration();
}


/* ==========================================
   MEMORIES
========================================== */

function showMemories() {

    message.classList.remove(
        "active"
    );

    memories.classList.add(
        "active"
    );


    createDots();
}


/* ==========================================
   FINAL PAGE
========================================== */

function showFinal() {

    memories.classList.remove(
        "active"
    );

    final.classList.add(
        "active"
    );


    startCelebration();
}


/* ==========================================
   NEXT PHOTO
========================================== */

function nextPhoto() {

    currentPhoto++;


    if (
        currentPhoto >= photos.length
    ) {

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

        currentPhoto =
            photos.length - 1;
    }


    changePhoto();
}


/* ==========================================
   CHANGE PHOTO
========================================== */

function changePhoto() {

    const image =
        document.getElementById(
            "memoryPhoto"
        );

    const photoMessage =
        document.getElementById(
            "photoMessage"
        );

    const counter =
        document.getElementById(
            "photoCounter"
        );


    /*
       Restart photo animation.
    */

    image.style.animation = "none";

    void image.offsetWidth;


    /*
       Change image.
    */

    image.src =
        photos[currentPhoto].image;


    /*
       Change message.
    */

    photoMessage.innerHTML =
        photos[currentPhoto].message;


    /*
       Change counter.
    */

    counter.innerHTML =
        (currentPhoto + 1)
        + " / "
        + photos.length;


    /*
       Play animation.
    */

    image.style.animation =
        "photoAppear 0.7s ease";


    updateDots();
}


/* ==========================================
   PHOTO DOTS
========================================== */

function createDots() {

    const dots =
        document.getElementById(
            "dots"
        );


    dots.innerHTML = "";


    for (
        let i = 0;
        i < photos.length;
        i++
    ) {

        const dot =
            document.createElement(
                "div"
            );


        dot.classList.add(
            "dot"
        );


        if (
            i === currentPhoto
        ) {

            dot.classList.add(
                "active"
            );
        }


        dot.onclick =
            function () {

                currentPhoto = i;

                changePhoto();
            };


        dots.appendChild(
            dot
        );
    }
}


/* ==========================================
   UPDATE PHOTO DOTS
========================================== */

function updateDots() {

    const dots =
        document.querySelectorAll(
            ".dot"
        );


    dots.forEach(
        function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentPhoto
            );
        }
    );
}


/* ==========================================
   FLOATING HEARTS
========================================== */

function createFloatingHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "floating-heart"
    );


    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"
    ];


    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 25)
        + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5)
        + "s";


    document.body.appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        11000
    );
}


/* ==========================================
   BALLOONS
========================================== */

function createBalloon() {

    const balloon =
        document.createElement(
            "div"
        );


    balloon.classList.add(
        "balloon"
    );


    balloon.innerHTML =
        "🎈";


    balloon.style.left =
        Math.random() * 100 + "vw";


    balloon.style.fontSize =
        (40 + Math.random() * 30)
        + "px";


    balloon.style.animationDuration =
        (7 + Math.random() * 6)
        + "s";


    document.body.appendChild(
        balloon
    );


    setTimeout(
        function () {

            balloon.remove();

        },
        15000
    );
}


/* ==========================================
   SPARKLES
========================================== */

function createSparkle() {

    const sparkle =
        document.createElement(
            "div"
        );


    sparkle.classList.add(
        "sparkle"
    );


    sparkle.innerHTML =
        "✦";


    sparkle.style.left =
        Math.random() * 100 + "vw";


    sparkle.style.top =
        Math.random() * 100 + "vh";


    sparkle.style.fontSize =
        (10 + Math.random() * 20)
        + "px";


    document.body.appendChild(
        sparkle
    );


    setTimeout(
        function () {

            sparkle.remove();

        },
        2000
    );
}


/* ==========================================
   START CELEBRATION
========================================== */

function startCelebration() {

    /*
       Prevent duplicate intervals.
    */

    if (effectsStarted) {
        return;
    }


    effectsStarted = true;


    /*
       Floating hearts.
    */

    setInterval(
        createFloatingHeart,
        700
    );


    /*
       Balloons.
    */

    setInterval(
        createBalloon,
        2600
    );


    /*
       Sparkles.
    */

    setInterval(
        createSparkle,
        800
    );


    /*
       Initial balloons.
    */

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(
            createBalloon,
            i * 150
        );
    }


    /*
       Initial hearts.
    */

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            createFloatingHeart,
            i * 80
        );
    }


    /*
       Initial sparkles.
    */

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            createSparkle,
            i * 70
        );
    }
}


/* ==========================================
   KEYBOARD CONTROLS
========================================== */

document.addEventListener(
    "keydown",
    function (event) {


        /*
           Left arrow = previous photo
        */

        if (
            event.key === "ArrowLeft" &&
            memories.classList.contains(
                "active"
            )
        ) {

            previousPhoto();
        }


        /*
           Right arrow = next photo
        */

        if (
            event.key === "ArrowRight" &&
            memories.classList.contains(
                "active"
            )
        ) {

            nextPhoto();
        }


        /*
           Space = music
        */

        if (
            event.code === "Space" &&
            event.target.tagName !== "BUTTON"
        ) {

            event.preventDefault();

            toggleMusic();
        }

    }
);
