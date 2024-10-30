var body = document.getElementsByClassName('btn-container')
var letter = document.getElementById('letter')
body[0].addEventListener("click", myFunction())

function add(){
    letter.classList.add("card-none")
}

add()

function myFunction(){
    letter.classList.toggle("card-none")
}

