var result = document.getElementById("result");
result.innerHTML = "0";
var input = document.getElementById("input");

function getButton(button) {
    input.innerHTML += button;
    result.innerHTML = ""
}

function clearInput() {
    input.innerHTML = ""
    result.innerHTML = "0"
}

function getResult() {
    result.innerHTML = eval(input.innerHTML)
    if (result.innerHTML == "undefined") {
        result.innerHTML = "0"
    }
}

function returned() {
    input.innerHTML = input.innerHTML.slice(0, -1)
}
window.onerror = function () {
    alert("Error Occured. Check Input.")
}

var click = new Audio();
click.src = "click.mp3"
function playAudio(){
    click.play()
}