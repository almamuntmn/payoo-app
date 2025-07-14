document.getElementById('btn-casHout').addEventListener('click', function () {

    const cashOut = getInputElementByID('input-out-money');
    const pinNumber = getInputElementByID('input-pin-number2');

    if (pinNumber === 1234) {
        const balance = getTextElementByID('account-balance');
        const newBalance = balance - cashOut;
        console.log(balance);

        document.getElementById('account-balance').innerText = newBalance;
    }
    
    else {
        alert('Please try again')
    }
})