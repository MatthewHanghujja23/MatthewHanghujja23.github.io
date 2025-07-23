console.log('Test 3');


function show() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    document.querySelector('#output').textContent = "The multiplication of " +num1 + " and " + num2 + " is " + (num1 * num2); 

}

document.querySelector('#btnCalculate').addEventListener('click', show);