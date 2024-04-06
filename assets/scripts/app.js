const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput(){
  return parseInt(userInput.value);
}

function writeOutput(operator,resultBefore,calcResult){
    const resultDescription = `${resultBefore} ${operator} ${calcResult}`
    outputResult(resultBefore, resultDescription)
}

function add(){  
  const enteredNumber =getUserInput();
  const initCurrentResult= currentResult
  currentResult += enteredNumber;
  writeOutput("+",initCurrentResult,currentResult)

}

function sub(){  
  const enteredNumber =getUserInput();
  const initCurrentResult= currentResult
  currentResult -= enteredNumber;
  writeOutput("-",initCurrentResult,currentResult)
}

function mul(){  
  const enteredNumber = getUserInput();
  const initCurrentResult= currentResult
  currentResult *= enteredNumber;
  writeOutput("*",initCurrentResult,currentResult)
}

function div(){  
  const enteredNumber =getUserInput();
  const initCurrentResult= currentResult
  currentResult /= enteredNumber;
  writeOutput("/",initCurrentResult,currentResult)
}

addBtn.addEventListener('click', add)
subBtn.addEventListener('click', sub)
multiplyBtn.addEventListener('click', mul)
divisionBtn.addEventListener('click', div)