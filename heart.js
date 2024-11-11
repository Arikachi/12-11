let amount = 300;
let body = document.querySelector("body");
let button = document.querySelector(".btn");

function heart(){
    button.style.opacity = 0
    let i = 0;
    while(i < amount){
        let drop = document.createElement('i')
        let size = Math.random() * 5
        let posY = Math.floor(Math.random() * window.innerHeight)
        let posX = Math.floor(Math.random() * window.innerWidth)
        let delay = Math.random() * -20
        let duration = Math.random() * 16

        drop.style.width = 10 + size+"px"
        drop.style.top = posY + "px"
        drop.style.left = posX + "px"
        drop.style.animationDelay = delay + "s"
        drop.style.animationDuration = 1.0 + duration + "s"
        body.appendChild(drop)
        i++
    }
}