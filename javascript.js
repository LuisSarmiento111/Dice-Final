const rollDiceButton = document.getElementById("rollDiceButton")
const confirmButton = document.getElementById("confirmButton")
const resetButton = document.getElementById("resetButton")
const form = document.getElementById("form")
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die1Image = document.getElementById("die1Image");
const die2Image = document.getElementById("die2Image");
const die3Image = document.getElementById("die3Image");
const total = document.getElementById("total");

rollDiceButton.addEventListener("click", rollDice);
confirmButton.addEventListener("click", disableForm)
resetButton.addEventListener("click",reset)

let diceNum = 0
let frequencies = []

function disableForm() {
    let elements = form.diceNum;
    for (let i = 0, len = elements.length; i < len; ++i) {
        if(elements[i].checked) {
            diceNum = parseInt(elements[i].value)
        }
        elements[i].disabled = true;
        }
}

 function reset() {
    let elements = form.diceNum;
    diceNum = 0
    for (let i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = false;
        elements[i].value = ""
        elements[i].checked = false
        }
    }
    for (let i = 1; i < 4; i++) {
        let dieImage = document.getElementById("die" + i + "Image")
        dieImage.src = ""
        console.log("hgejtiauhg")
    }

function rollDice() {
    let num = parseInt(document.getElementById("rollNum").value)
    console.log("value: " + num)
    const dices = [];
    for (let x = 0; x < num; x++) {
        dices.push(diceRoll());
    }
    console.log(dices)
}

function diceRoll() {
    let dices = []
    for (let dice = 1; dice < diceNum + 1; dice++) {
        let dieImage = document.getElementById("die" + dice + "Image")
        let roll  = "" + rollDie();
        console.log("images/" + roll + ".png")
        dieImage.src = "images/" + roll + ".png"
        dices.push(roll)
    }
    return dices
}

function rollDie() {
    return parseInt(Math.random() * 6) + 1;
}

function getFrequencies() {
    for (let i = 1; i < 7; i++) {
        
    }
}