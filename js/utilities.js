function getInputElementByID(id){
   const inputValue = document.getElementById(id).value;
   const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextElementByID(id){
   const inputText = document.getElementById(id).innerText;
   const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;
}

function displayCard(id){
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('cash-out-card').classList.add('hidden');
}


function showCardById(id){
    document.getElementById('cash-in-card').classList.add('hidden');
    document.getElementById('cash-out-card').classList.add('hidden');
    document.getElementById('transaction-card').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}