document.getElementById('btn-add-money')
.addEventListener('click', function(){
    
    const addMoney = getInputElementByID('input-add-money');
    const pinNumber = getInputElementByID('input-pin-number');

    if (pinNumber === 1234){
        const balance = getTextElementByID('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong Phone or Pin, Please try again later')
    }
})