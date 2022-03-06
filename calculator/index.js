let input = '';    // const stops you from REASSIGNING

const display = document.querySelector('#display');

const numericSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-']

const operators = {
    '×': (x, y) => x * y,
    '÷': (x, y) => x / y,
    '+': (x, y) => x + y,
    '−': (x, y) => x - y,
}

const operatorPrecedence = {
    '×': 1,
    '÷': 1,
    '+': 0,
    '−': 0,
}

document.addEventListener('keydown', (event) => {

    switch (event.key) {
        case '1':
            document.querySelector('#button-1').click();
            break;
        case '2':
            document.querySelector('#button-2').click();
            break;
        case '3':
            document.querySelector('#button-3').click();
            break;
        case '4':
            document.querySelector('#button-4').click();
            break;
        case '5':
            document.querySelector('#button-5').click();
            break;
        case '6':
            document.querySelector('#button-6').click();
            break;
        case '7':
            document.querySelector('#button-7').click();
            break;
        case '8':
            document.querySelector('#button-8').click();
            break;
        case '9':
            document.querySelector('#button-9').click();
            break;
        case '0':
            document.querySelector('#button-0').click();
            break;
        case '*':
            document.querySelector('#×').click();
            break;
        case '/':
            document.querySelector('#÷').click();
            break;
        case '+':
            document.querySelector('#add').click();
            break;
        case '-':
            document.querySelector('#subtract').click();
            break;
        case 'Backspace':
            document.querySelector('#backspace').click();
            break;
        case '.':
            document.querySelector('#decimal').click();
            break;
        case 'Enter':
        case '=':
            document.querySelector('#enter').click();
            break;
    }

});

function calculateAndDisplay() {

    const matches = input.matchAll(/[×÷+−]|[^×÷+−]+/g);

    const postfix = [];

    const stack = [];

    for (const match of matches) {
        const part = match[0];

        if (part in operators) {
            while (true) {
                const top = stack[stack.length - 1];
                if (operatorPrecedence[top] >= operatorPrecedence[part]) {
                    postfix.push(stack.pop());
                } else {
                    stack.push(part);
                    break;
                }
            }
        } else {
            const number = Number(part);
            postfix.push(number);
        }
    }

    while (stack.length > 0) {
        postfix.push(stack.pop());
    }

    for (const element of postfix) {
        if (element in operators) {
            const y = stack.pop();
            const x = stack.pop();
            stack.push(operators[element](x, y));
        } else {
            stack.push(element);
        }
    }

    if (isNaN(stack[0])) {
        input = '';
        display.innerHTML = 'Error';
    } else {
        input = String(stack[0]);
        display.innerHTML = input;
    }
}

function pushAndDisplay(x) {
    input += x
    display.innerHTML = input;
    display.scrollTo(0, 0);
}

function popAndDisplay() {
    input = input.substring(0, input.length - 1)
    display.innerHTML = input;
}

function emptyAndDisplay() {
    input = '';
    display.innerHTML = input;
}

window.addEventListener('load', function () {
    navigator.serviceWorker.register('/calculator/sw.js').then((registration) => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
});
