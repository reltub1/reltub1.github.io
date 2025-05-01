var buttons = document.getElementById("7") 
var clicks = document.getElementById("9")

var nemclicks = 0

function updateclicks(){
    nemclicks += 1
    clicks.textContent = nemclicks
    console.log(nemclicks)

}

    





buttons.onclick = updateclicks