"use strict";
// Theme config:
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.querySelector(".audio__theme");
    audio.muted = true;
    audio.play().catch(error => console.log("Autoplay bloqueado: " + error));
});
