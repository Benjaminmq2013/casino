const rollBtn = document.querySelector(".roll-btn")
const resultBox = document.querySelector(".result")
rollBtn.addEventListener("click", letsRoll)

function letsRoll () {
    var result = "Pierdes!"

    const random = Math.random() * (10 - 1) + 1;
    

    if(random >= 5 ) result = "Ganaste!"

    calculateNewMoney(result)
    setNewMoney()

    
    resultBox.innerHTML = `${result}`
}


const moneyBox = document.querySelector(".money-box")
var currentMoney = 5;
moneyBox.innerHTML = currentMoney;

function calculateNewMoney (result) {
    if(result === "Ganaste!") {
        currentMoney += 0.5;
    } else {
        currentMoney -= 0.5;
    }
}

const setNewMoney = () => moneyBox.innerHTML = `${currentMoney}`;
setNewMoney()