const userInput= document.getElementById("input-number");
const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("sub-btn");
const multiplyBtn = document.getElementById("mul-btn");
const divisionBtn = document.getElementById("div-btn");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}