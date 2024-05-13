// Cotação
const USD = 5.10
const EUR = 5.32
const GBP = 6.20

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
    console.log(amount.value)
})


form.addEventListener('submit', (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break;

        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break;

        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break;
            
        default:
            break;
    }
})

function convertCurrency(amount, price, symbol) {
    try {
        footer.classList.add('show-result')
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        if (isNaN(total)) {
            return alert('Por favor, digite um valor válido.')
        }

        total = formatCurrencyBRL(total).replace('R$', '')

        result.textContent = `${total} Reais`
    } catch (error) {
        console.log(error)

        footer.classList.remove('show-result')
        alert('Ocorreu um erro, tente novamente.')
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}