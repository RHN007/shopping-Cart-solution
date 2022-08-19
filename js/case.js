function updateCaseTotalPrice (newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59 ; 
    const caseTotalElement = document.getElementById('case-pp-price'); 
    caseTotalElement.innerText = caseTotalPrice
  
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumber = updateNumber(true,'case-number-field'); 

    updateCaseTotalPrice(newCaseNumber)
})


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateNumber(false,'case-number-field'); 
    
    
    updateCaseTotalPrice(newCaseNumber)
})