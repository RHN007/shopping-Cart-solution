function updatePhoneTotalPrice (newPhoneNumber){
    const PhoneTotalPrice = newPhoneNumber * 1219 ; 
    const phoneTotalElement = document.getElementById('phone-total'); 
    phoneTotalElement.innerText = PhoneTotalPrice
  
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(true,'phone-number-field'); 
    updatePhoneTotalPrice(newPhoneNumber); 

  calculateSubTotal(); 
  })
  
  
  document.getElementById('btn-phone-minus').addEventListener('click', function(){
      const newPhoneNumber = updateNumber(false,'phone-number-field'); 
      updatePhoneTotalPrice(newPhoneNumber)
      calculateSubTotal()
  })