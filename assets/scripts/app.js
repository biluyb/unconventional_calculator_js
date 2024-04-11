const defaultResult = 0;
let currentResult = defaultResult;
let logEntry = []

function getUserInput() {
  return parseInt(userInput.value);
}

function reset() {
  erasedNumber = 0;
  console.log("reset");
  currentResult = 0;
  inputField(erasedNumber);
}

function writeOutput(operator, resultBefore, calcResult) {
  const resultDescription = `${resultBefore} ${operator} ${calcResult}`
  outputResult(calcResult, resultDescription)
}
function writeToLog(
  calcOperation,
  prevResult,
  theNumber,
  finalResult,
) {
  const addObject = {
    operation: calcOperation,
    prevResult: prevResult,
    number: theNumber,
    result: finalResult,
  }
  logEntry.push(addObject);
  console.log(logEntry);
}

function calculation(calcType) {
  const enteredNumber = getUserInput();
  const initCurrentResult = currentResult;
  let operator;

  if (calcType === "ADD") {
    currentResult += enteredNumber;
    operator = "+"
  }
  else if (calcType === "SUBTRACTION") {
    currentResult -= enteredNumber;
    operator = "-"
  }
  else if (calcType === "MULTIPLICATION") {
    currentResult *= enteredNumber;
    operator = "*"
  }
  else if (calcType === "DIVISION") {
    currentResult /= enteredNumber;
    operator = "/"
  }

  writeOutput(operator, initCurrentResult, currentResult);
  writeToLog(calcType, initCurrentResult, enteredNumber, currentResult)
}

function add() {
  calculation("ADD");
}

function sub() {
  calculation("SUBTRACTION");
}

function mul() {
  calculation("MULTIPLICATION");
}

function div() {
  calculation("DIVISION");
}


addBtn.addEventListener('click', add)
subBtn.addEventListener('click', sub)
multiplyBtn.addEventListener('click', mul)
divisionBtn.addEventListener('click', div)
resetBtn.addEventListener('click', reset)