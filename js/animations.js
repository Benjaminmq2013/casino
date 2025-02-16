document.addEventListener("DOMContentLoaded", () => animButtons)

function animButtons () {
    const rollBtnCollection = document.querySelectorAll("roll-btn")
    if(rollBtnCollection.length === 0) return;


    rollBtnCollection.forEach(btn => {
        btn.addEventListener("click")
    })
}
