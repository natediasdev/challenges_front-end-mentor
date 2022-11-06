function valid() {
    var cardName = document.querySelector('.cardholder')
    var cardNumber = document.querySelector('.card-name')
    var expDate = document.querySelector('.exp-date')
    var cvc = document.querySelector('.cvc')

    var inputCardName = document.querySelector('#cardholder-name')
    var inputCardNumber = document.querySelector('#card-number')
    var inputMonth = document.querySelector('#month')
    var inputYear = document.querySelector('#year')
    var inputCVC = document.querySelector('#cvc')

    var errorName = document.querySelector('#errorName')
    var errorNumber = document.querySelector('#errorNumber')
    var errorYear = document.querySelector('#errorYear')
    var errorCvc = document.querySelector('#errorCvc')

    var data = new Date()
    var ano_atual = data.getFullYear() - 2000
    let ano_proximo = ano_atual + 15

    
    if (inputCardNumber.value.length < 16 || inputCardNumber.value.length > 16) {
        errorNumber.innerHTML = 'Erro no número digitado!'
        errorNumber.style.color = 'red'
    }


    if (inputCardName.value.length == 0) {
        errorName.innerHTML = 'Erro no nome digitado!'
        errorName.style.color = 'red'
    }


    if (inputMonth.value.length <= 0 || inputMonth.value.length <= 3 || inputYear.value <= ano_atual || inputYear.value > ano_proximo || inputYear.value.length >= 3) {
        errorYear.innerHTML = 'Erro no mês/ano digitado!'
        errorYear.style.color = 'red'
    }
    

    
    if (inputCVC.value.length == 0 || inputCVC.value.length >= 4) {
        errorCvc.innerHTML = 'Erro no CVC digitado!'
        errorCvc.style.color = 'red'
    }

    

    function card() {
        
    }
    

}

card()