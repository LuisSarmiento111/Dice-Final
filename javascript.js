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

rollDiceButton.addEventListener("click", diceRoll);
confirmButton.addEventListener("click", disableForm)
resetButton.addEventListener("click",enableForm)

let diceNum = "0"

function disableForm() {
    let elements = form.diceNum;
    for (let i = 0, len = elements.length; i < len; ++i) {
        if(elements[i].checked) {
            diceNum = elements[i].value
            console.log("checked")
        }
        elements[i].disabled = true;
        console.log(elements[i].value)
        }
        console.log("diceNum: " + diceNum)
}

 function enableForm() {
    let elements = form.diceNum;
    for (let i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = false;
        elements[i].value = ""
        elements[i].checked = false
        }
        diceNum = "0"
    }

function rollDice() {
    let num = document.getElementById("rollNum").value;
    const dices = [];
    for (let i = 0; i < num; i++) {
        diceRoll();
    }
}

function diceRoll() {
    for (let i = 1; i < diceNum + 1; i++) {
        console.log(i)
        let  die = "die" + i;
        die.innerHTML = rollDice();
        die.src = "images/" + parseInt(die.innerHTML) + ".png"
    }
}

function rollDie() {
    return parseInt(Math.random() * 6) + 1;
}