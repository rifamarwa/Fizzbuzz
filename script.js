const btn = document.querySelector('button');

let i = 0;
let error_warning;
const clickIncrement = function() {
    i++;
};
btn.addEventListener('click', clickIncrement);
btn.addEventListener('click', function () {
    let number = document.getElementById('inputNumber').value;
    const para = document.createElement("p");
    let node;
    if(i == 1){
        if(number == 0){
            document.getElementById('firstNumber').innerHTML = 'Invalid Input!';
        }
        else {
            document.getElementById('firstNumber').innerHTML = number;
        }
    } else{
        if (number == 0){
            node = document.createTextNode('Invalid Input!');
            para.appendChild(node);
            document.getElementById('outputNumber').appendChild(para);
        } else if (number % 3=== 0 && number % 5 === 0){
            node = document.createTextNode('FizzBuzz!');
            para.appendChild(node);
            document.getElementById('outputNumber').appendChild(para);
        } else if (number % 3 == 0){
            node = document.createTextNode('Buzz!');
            para.appendChild(node);
            document.getElementById('outputNumber').appendChild(para);
        } else if (number % 5 == 0){
            node = document.createTextNode('Fizz!');
            para.appendChild(node);
            document.getElementById('outputNumber').appendChild(para);
        } else{
            node = document.createTextNode(number);
            document.getElementById('outputNumber').appendChild(para);
        }
    }
    console.log(document.getElementById('inputNumber').value);
});


