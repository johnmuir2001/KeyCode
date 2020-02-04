let topText = document.getElementById("heading")
let keyValue = document.getElementById("keyValue")
let keyCode = document.getElementById("keyCode")
let charCode = document.getElementById("charCode")
let key = document.getElementById("key")

document.addEventListener("keypress", () => {
    topText.textContent = event.keyCode
    topText.style.fontSize = "23vh"
    topText.style.top = "-50vh"
    keyValue.textContent = event.key
    keyCode.textContent = event.code
    charCode.textContent = event.charCode
    console.dir(event)
})