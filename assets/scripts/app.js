const defaultResult = 0;
let currentResult = defaultResult;
let logEntry = []

function getUserInput(){
  return parseInt(userInput.value);
}

function writeOutput(operator,resultBefore,calcResult){
    const resultDescription = `${resultBefore} ${operator} ${calcResult}`
    outputResult(resultBefore, resultDescription)
}
function writeToLog(
  calcOperation,
  prevResult,
  theNumber,
  finalResult,
  ){
  const addObject={
    operation : calcOperation,
    prevResult : prevResult,
    number :theNumber,
    result : finalResult,
  }
  logEntry.push(addObject);
  console.log(logEntry);
  }

function add(){  
  const enteredNumber =getUserInput();
  const initCurrentResult= currentResult
  currentResult += enteredNumber;
  writeOutput("+",initCurrentResult,currentResult);
  writeToLog("ADD",initCurrentResult,enteredNumber,currentResult)
}

function sub(){  
  const enteredNumber =getUserInput();
  const initCurrentResult= currentResult
  currentResult -= enteredNumber;
  writeOutput("-",initCurrentResult,currentResult)
  writeToLog("SUBTRACTION",initCurrentResult,enteredNumber,currentResult)
}

function mul(){  
  const enteredNumber = getUserInput();
  const initCurrentResult= currentResult
  currentResult *= enteredNumber;
  writeOutput("*",initCurrentResult,currentResult)
  writeToLog("MULTIPLICATION",initCurrentResult,enteredNumber,currentResult)
}

function div(){  
  const enteredNumber =getUserInput();
  const initCurrentResult= currentResult
  currentResult /= enteredNumber;
  writeOutput("/",initCurrentResult,currentResult)
  writeToLog("DIVISION",initCurrentResult,enteredNumber,currentResult)
}

addBtn.addEventListener('click', add)
subBtn.addEventListener('click', sub)
multiplyBtn.addEventListener('click', mul)
divisionBtn.addEventListener('click', div)