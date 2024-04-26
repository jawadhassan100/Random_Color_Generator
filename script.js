const button = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

button.addEventListener("click" , getColor);

function getColor(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
};

getColor();