console.log('Test 2');


function show() {
    let fname = document.querySelector('#fname').value;
    document.querySelector('#output').textContent = "Hello " + fname;
}

document.querySelector('#btnGo').addEventListener('click', show);