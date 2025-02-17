document.addEventListener("DOMContentLoaded", () => animButtons)


function animButtons () {
    const rollBtnCollection = document.querySelectorAll(".roll-btn")
    if(rollBtnCollection.length === 0) return;

    // Getting Animations Duration value. Defined in a animations.css variables.
    const rootStyles = getComputedStyle(document.documentElement);
    const rawDuration = rootStyles.getPropertyValue('--animation-duration'); 
    const animationDuration = parseFloat(rawDuration); 
    console.log(animationDuration * 1000)


    rollBtnCollection.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.add("press-button-anim")
            setTimeout(() => {
                btn.classList.remove("press-button-anim")
            }, animationDuration * 1000)
        })
    })


}

animButtons()
