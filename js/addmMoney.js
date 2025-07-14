document.getElementById('btn-add-money')
    .addEventListener('click', function () {

        const addMoney = getInputElementByID('input-add-money');
        const pinNumber = getInputElementByID('input-pin-number');
        
        if (isNaN(addMoney)) {
            alert('Failed to add money')
            return
        }
        if (pinNumber === 1234) {
            const balance = getTextElementByID('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;
            // transaction//
            const p = document.createElement('p');
            p.innerText = `Added : ${addMoney} Tk. | Balance: ${newBalance}`;

            document.getElementById('trasaction-cotainer').appendChild(p);
        }
        else {
            alert('Wrong Phone or Pin, Please try again later')
        }
    })