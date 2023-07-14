let expression = '';

function appendNumber(num) {
    expression += num;
    document.getElementById('result').value = expression;
}

function appendOperator(operator) {
    if (expression.slice(-1) !== operator) {
        expression += operator;
        document.getElementById('result').value = expression;
    }
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    expression = '';
    document.getElementById('result').value = '';
}
