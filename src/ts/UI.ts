

const cardsTemplate = () => {
    let template = ""

    for (let i = 0; i < 11; i++) {      
        template = template + 
        `<div class="card"> <img class="slot__image" src="public/assets/artworks/image-item-${i + 1}.png" /> </div>`
    }

    return template
}


document.addEventListener("DOMContentLoaded", () => {
    const cardScrollCollection = document.querySelectorAll(".card__scroll")
    cardScrollCollection.forEach((cardScroll, index) => {
        cardScroll.innerHTML = cardsTemplate();
    })
})