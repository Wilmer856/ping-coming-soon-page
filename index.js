
const errorMsg = document.querySelector(".error-text");
const btn = document.querySelector(".notify-btn");
const text = document.querySelector(".input-text");


btn.addEventListener('click', e => {

    let email = text.value;

    var atSymbol = email.indexOf("@");
    var dotSymbol = email.lastIndexOf(".");
    var spaceSymbol = email.indexOf(" ");
  
    if ((atSymbol != -1) &&
        (atSymbol != 0) &&
        (dotSymbol != -1) &&
        (dotSymbol != 0) &&
        (dotSymbol > atSymbol + 1) &&
        (email.length > dotSymbol + 1) &&
        (spaceSymbol == -1)) {
            text.value = "";
            errorMsg.style.display = "none"
            document.querySelector(".input-text").style.borderColor = "hsl(223, 100%, 88%)"
            
            return true;
        } 
        else {
            errorMsg.style.display = "block"
            document.querySelector(".input-text").style.borderColor = "hsl(354, 100%, 66%)"
        }

})