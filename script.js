const rollBtn = document.querySelector(".roll-btn")
const result = document.querySelector(".result")
rollBtn.addEventListener("click", letsRoll)

function letsRoll () {
    console.log(result)
    result.innerHTML = "Ganaste!"
}