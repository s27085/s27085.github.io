const submitButton = $('#submit');
const form = $('#inputs');

const operations = {
    'dodaj': (a, b) => Number(a) + Number(b),
    'odejmij': (a, b) => Number(a) - Number(b),
    'mnoz': (a, b) => Number(a) * Number(b),
    'dziel': (a, b) => Number(a) / Number(b),
};
form.on('submit', function () {
    let factor1 = $('#first-factor').val();
    let factor2 = $('#second-factor').val();
    let op = $('#operation').val();
    let product = $('#product');
    if (factor1 === '' || factor2 === '') {
        product.text('#');
    }
    else {
        console.log(op)
        if (op === 'dziel' && factor2 === '0') {
            product.text('Nie dziel przez zero!');
        } else {
            product.text(operations[op](factor1, factor2));
        }
    }
    return false;
});