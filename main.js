
function getUserName() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("user-name-display").textContent = "Hello, " + name + "!";
    }
}


function enlargeImage(imageElement) {
    const newWindow = window.open(imageElement.parentNode.href, '_blank');
    newWindow.focus();
}


function hoverEffect(element) {
    element.style.backgroundColor = "#f0f0f0";
}

function hoverOut(element) {
    element.style.backgroundColor = "transparent";
}
