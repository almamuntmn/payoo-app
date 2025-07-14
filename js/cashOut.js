document.getElementById('btn-casHout').addEventListener('click', function () {

    const cashOut = getInputElementByID('input-out-money');
    const pinNumber = getInputElementByID('input-pin-number2');

         if (isNaN(cashOut)) {
            alert('Failed cash out money')
            return;
        }

    if (pinNumber === 1234) {
        const balance = getTextElementByID('account-balance');

        if(cashOut > balance){
            alert('Do not have enough money')
            return;
        }
        const newBalance = balance - cashOut;
        console.log(balance);

        document.getElementById('account-balance').innerText = newBalance;
        // transaction////
        // const p = document.createElement('p');
        // p.innerText = `Cash Out : ${cashOut} Tk. | Balance: ${newBalance}`;

        // document.getElementById('trasaction-cotainer').appendChild(p);
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <p>withdraw: ${cashOut} | New Balance: ${newBalance}</p>
            `
        document.getElementById('trasaction-cotainer').appendChild(div);


    }

    else {
        alert('Please try again')
    }
})