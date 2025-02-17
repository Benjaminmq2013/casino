import { calculateNewBalance } from "../Backend/newBalance.js"

const rollBtnCollection = document.querySelectorAll(".roll-btn")
const resultBox = document.querySelector(".result")

const moneyBox = document.querySelector(".money-box")

let initialBalance = 5;
let currentBalance = initialBalance;



// Roll Buttons:
rollBtnCollection.forEach(button => {
    const rollPrice = Number(button.getAttribute("data-price"))   
    button.addEventListener("click", () => letsRoll(rollPrice))
})


// Roll Function
function letsRoll (rollPrice) {

    var result = "Pierdes!"
    const random = Math.random() * (10 - 1) + 1; 

    if(random >= 5 ) result = "Ganaste!"

    currentBalance = calculateNewBalance(currentBalance, result, rollPrice)
    setNewMoney(currentBalance)

    
    resultBox.innerHTML = `${result}`
}






const setNewMoney = (newBalance) => moneyBox.innerHTML = `${newBalance}`;
setNewMoney(initialBalance)