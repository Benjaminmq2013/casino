const audio = document.querySelector(".audio__sfx");
function playingSFX(sfx) {
    audio.play();
    console.log("playing sfx", audio);
}
export const playSFX = {
    win: () => playingSFX("win")
};
