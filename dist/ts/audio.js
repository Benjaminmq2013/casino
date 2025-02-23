// Theme config:
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.querySelector(".audio__theme");
    audio.muted = true;
    audio.play().catch(error => console.log("Autoplay bloqueado: " + error));
});
export const playSFX = ({
    win: () => playingSFX("win")
});
function playingSFX(sfx) {
    console.log("PLAYING EFFECT");
}
playSFX.win();
