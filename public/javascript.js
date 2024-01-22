const rollDiceButton = document.getElementById("rollDiceButton")
const confirmButton = document.getElementById("confirmButton")
const resetButton = document.getElementById("resetButton")
const form = document.getElementById("form")
const table = document.getElementById("table")
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die1Image = document.getElementById("die1Image");
const die2Image = document.getElementById("die2Image");
const die3Image = document.getElementById("die3Image");
const total = document.getElementById("total");

rollDiceButton.addEventListener("click", rollDice);
confirmButton.addEventListener("click", disableForm)
resetButton.addEventListener("click", reset)

let diceNum = 0
let frequencies = [0, 0, 0, 0, 0, 0]
let allDiceRolls = [];

function disableForm() {
    let elements = form.diceNum;
    for (let i = 0, len = elements.length; i < len; ++i) {
        if (elements[i].checked) {
            diceNum = parseInt(elements[i].value)
        }
        elements[i].disabled = true;
    }
    rollDiceButton.style.visibility = 'visible'
}

function reset() {
    let elements = form.diceNum;
    diceNum = 0
    frequencies = [0, 0, 0, 0, 0, 0]
    allDiceRolls = [[]]
    for (let i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = false
        elements[i].checked = false
        elements[i].value = ""
    }
    for (let x = 1; x < 4; x++) {
        let dieImage = document.getElementById("die" + x + "Image")
        dieImage.src = ""
        console.log("hgejtiauhg")
    }
}

function rollDice() {
    let num = parseInt(document.getElementById("rollNum").value)
    console.log("value: " + num)
    for (let x = 0; x < num; x++) {
        allDiceRolls.push(diceRoll());
    }
    console.log(allDiceRolls)
    table.style.visibility = 'visible'
    getFrequencies();
    getMeans();
    if (diceNum > 1) {
        getDoubles();
        if (diceNum > 2) {
            getTriples();
        }
    } else {
        table.rows[7].cells[1].innerHTML = 0;
        table.rows[8].cells[1].innerHTML = 0;
    }


}

function diceRoll() {
    let dices = []
    for (let dice = 1; dice < diceNum + 1; dice++) {
        let dieImage = document.getElementById("die" + dice + "Image")
        let roll = parseInt(Math.random() * 6) + 1;
        console.log("images/" + roll + ".png")
        dieImage.src = "images/" + roll + ".png"
        dieImage.style.visibility = 'visible'
        dices.push(roll)
    }
    return dices
}

function getFrequencies() {
    frequencies = [0, 0, 0, 0, 0, 0];
    for (let i = 1; i < 7; i++) {
        for (let r = 0; r < allDiceRolls.length; r++) {
            for (let c = 0; c < allDiceRolls[r].length; c++) {
                if (allDiceRolls[r][c] == (i)) {
                    frequencies[i - 1]++;
                }
            }
        }
        table.rows[i - 1].cells[1].innerHTML = frequencies[i - 1];
    }

}

function getMeans() {
    let sum = 0;
    let num = allDiceRolls.length * allDiceRolls[0].length
    for (let r = 0; r < allDiceRolls.length; r++) {
        for (let c = 0; c < allDiceRolls[r].length; c++) {
            sum += allDiceRolls[r][c];
        }
    }
    console.log(allDiceRolls.length)
    console.log(allDiceRolls[0].length)
    console.log(num)
    let mean = Math.round((sum / num) * 100) / 100;
    table.rows[6].cells[1].innerHTML = mean
}


function getDoubles() {
    let count = 0;
    for (let r = 0; r < allDiceRolls.length; r++) {
        if (allDiceRolls[r][0] == allDiceRolls[r][1] || allDiceRolls[r][0] == allDiceRolls[r][2] || allDiceRolls[r][1] == allDiceRolls[r][2]) {
            count++;
        }
    }
    table.rows[7].cells[1].innerHTML = count;
}

function getTriples() {
    let count = 0;
    for (let r = 0; r < allDiceRolls.length; r++) {
        if (allDiceRolls[r][0] == allDiceRolls[r][1] == allDiceRolls[r][2]) {
            count++;
        }
    }
    table.rows[8].cells[1].innerHTML = count;
}