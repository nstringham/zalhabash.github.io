let input = '';    // const stops you from REASSIGNING

const display = document.querySelector('#display');

const numericSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-']

const operators = {
    '×': (x, y) => x * y,
    '÷': (x, y) => x / y,
    '+': (x, y) => x + y,
    '−': (x, y) => x - y,
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

    calculateOperator('×', '÷');
    calculateOperator('+', '−');

    //1×⁻1+2

    display.innerHTML = input;
}

function calculateOperator(...currentOperators) {
    // multiplication/division
    let firstNum;
    let secondNum;

    let beginInd1;
    let endInd1;
    let beginInd2;
    let endInd2;
    let operationSymbol;

    for (let i = 0; i < input.length; i++) {
        const element = input[i];

        if (currentOperators.includes(element)) {
            operationSymbol = i;
            endInd1 = i - 1;    //the last digit of the first number
            beginInd2 = i + 1;  //the first digit of the second number

            //scrap bits of stuff --->
            // if (input[endInd1+2] ) {            build in a check for consecutive × or ÷ symbols?
            //                                     not here but somewhere
            // }

            beginInd1 = i;
            while (numericSymbols.includes(input[beginInd1 - 1])) {
                beginInd1 -= 1;         //backpedal until the beginning of the first number
            }

            endInd2 = i;    //go to the location of your × or ÷ 
            while (numericSymbols.includes(input[endInd2 + 1])) {
                endInd2 += 1;          //go forward until the end of the second number
            }


            firstNum = Number(input.substring(beginInd1, endInd1 + 1));
            secondNum = Number(input.substring(beginInd2, endInd2 + 1));

            input =
                input.substring(0, beginInd1) +
                String(operators[element](firstNum, secondNum)) +
                input.substring(endInd2 + 1)

            i = beginInd1;
        }
    }
}

function pushAndDisplay(x) {
    input += x
    display.innerHTML = input;
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
