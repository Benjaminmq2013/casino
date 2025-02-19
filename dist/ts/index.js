"use strict";
import { letsRoll } from "../Backend/play.js";
import { initialBalance } from "../Backend/userInfo.js";
const rollBtnCollection = document.querySelectorAll(".roll-btn");
const resultBox = document.querySelector(".result");
const moneyBox = document.querySelector(".money-box");
// Roll Buttons:
rollBtnCollection.forEach(button => {
    const rollPrice = Number(button.getAttribute("data-price"));
    button.addEventListener("click", () => {
        const result = letsRoll(rollPrice);
        setResult(result.finalBalance, result.message);
    });
});
const setResult = (newBalance, message) => {
    moneyBox.innerHTML = `${newBalance.toFixed(2)}`;
    resultBox.innerHTML = `${message}`;
};
setResult(initialBalance, "--");
