"use strict";

import { letsRoll } from "../Backend/play.js"
import { initialBalance } from "../Backend/userInfo.js";
import { results } from "../interfaces/types.js";
import { playSFX } from "./soundEffects.js";

const rollBtnCollection = document.querySelectorAll(".roll-btn")
const resultBox = document.querySelector(".result")!;
const moneyBox = document.querySelector(".money-box")!;


// Roll Buttons:
rollBtnCollection.forEach(button => {
    const rollPrice = Number(button.getAttribute("data-price"))   

    button.addEventListener("click", () => {
        const result = letsRoll(rollPrice)
        setResult(result.finalBalance, result.message)        
    })
})


const setResult = (newBalance:number, message:results ) => {
    let resultMessage = "--"
    if(message === "Match1") resultMessage = "X2"
    else if(message === "Match2") resultMessage = "X5"

    moneyBox.innerHTML = `${newBalance.toFixed(2)}`;
    resultBox.innerHTML = `${resultMessage}`

    if(message !== "Pierdes!" ) playSFX.win()
}

setResult(initialBalance, "--")