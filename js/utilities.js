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

function getTextElementValueById (totalId){
    const totalPrice = document.getElementById(totalId); 
    const currentTotalPrice = parseInt(totalPrice.innerText); 
    return currentTotalPrice; 
}
function setTextElementValueById(elementId, value){
  
    const subTotalELement = document.getElementById(elementId); 
    subTotalELement.innerText = value; 
}




function calculateSubTotal (){
      //calculate total :
      const currentPhoneTotal = getTextElementValueById('phone-total'); 
      const currentCaseTotal = getTextElementValueById('case-total') 
     
      const currentSubTotal = currentCaseTotal + currentPhoneTotal; 
       setTextElementValueById('sub-total', currentSubTotal); 

     //calculate Tax 
    const taxAmountString = (currentSubTotal *.05).toFixed(2); 
    const taxAmount = parseFloat(taxAmountString); 
     setTextElementValueById('tax-amount', taxAmount); 

     const finalAmount = currentSubTotal + taxAmount; 
     setTextElementValueById('final-total', finalAmount)
}
