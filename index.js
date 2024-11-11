var body2 = document.getElementsByClassName('btn-container')
var letter = document.getElementById('letter')
let button2 = document.getElementById('heart');
button2.addEventListener("click", myFunction())

function add(){
    letter.classList.add("card-none")
}

add()

function myFunction(){
    letter.classList.toggle("card-none")
}

