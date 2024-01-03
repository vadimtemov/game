const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const firstletter = document.getElementById("firstletter");

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 500)
}

// Игра окончена

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Попробуй еще раз!!!");
    }
}, 10)

// Удаление



