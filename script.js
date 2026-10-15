const button = document.getElementById("change");
const body = document.getElementById("body");

function changestyle()
{
    body.classList.toggle("dark-mode");
}

button.addEventListener("click", changestyle);