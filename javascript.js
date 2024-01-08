const rollDiceButton = document.getElementById("rollDiceButton")
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die1Image = document.getElementById("die1Image");
const die2Image = document.getElementById("die2Image");
const die3Image = document.getElementById("die3Image");
const total = document.getElementById("total");

rollDiceButton.addEventListener("click", diceRoll);


function rollDice() {
    let num = document.getElementById("rollNum").value;
    const dices = [];
    for (let i = 0; i < num; i++) {
        diceRoll();
    }
}

function diceRoll() {
    die1.innerHTML = rollDie();
    die2.innerHTML = rollDie();
    die3.innerHTML = rollDie();
    die1Image.src = "images/" + parseInt(die1.innerHTML) + ".png"
    die2Image.src = "images/" + parseInt(die2.innerHTML) + ".png"
    die3Image.src = "images/" + parseInt(die3.innerHTML) + ".png"
    return parseInt(die1.innerHTML) + parseInt(die2.innerHTML) + parseInt(die3.innerHTML)
}

function rollDie() {
    return parseInt(Math.random() * 6) + 1;
}