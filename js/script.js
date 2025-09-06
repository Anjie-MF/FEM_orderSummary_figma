let themeSwitchInput = document.querySelector("#toggle");
let ball = document.querySelector(".ball");
let body = document.querySelector("body");


themeSwitchInput.addEventListener("click", function () {
    body.classList.toggle("party");
    ball.classList.toggle("move-right")
});

