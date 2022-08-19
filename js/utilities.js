function updateNumber(isIncrease,idName){
    const caseNumberField = document.getElementById(idName); 
    const caseValueNumber = parseInt(caseNumberField.value); 
    let newNumber; 

    if(isIncrease === true){
        newNumber = caseValueNumber + 1; 
    }
    else {
        newNumber = caseValueNumber -1 ; 
    }
    caseNumberField.value = newNumber ; 
    return newNumber
}
