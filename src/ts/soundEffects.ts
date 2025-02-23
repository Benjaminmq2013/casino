import type { soundEffects } from "../interfaces/types"

const audio = document.querySelector(".audio__sfx") as HTMLAudioElement;


function playingSFX (sfx:soundEffects) {
    audio.play()
    console.log("playing sfx", audio)
}


export const playSFX = {
    win: () => playingSFX("win")
}
