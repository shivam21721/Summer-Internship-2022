const multiplyButton = document.getElementById("mul-btn");
const divideButton = document.getElementById("div-btn");

const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => (num1/num2).toFixed(2);

const result = (num1, num2, operation) => operation(num1, num2);

multiplyButton.addEventListener("click", ()=>{
    const num1 = document.getElementById("num-1").value;
    const num2 = document.getElementById("num-2").value;
   

    const output = document.getElementById("output");

    output.innerHTML =  `The result is ${result(num1, num2, multiply)}`;
});

divideButton.addEventListener("click", ()=>{
    const num1 = document.getElementById("num-1").value;
    const num2 = document.getElementById("num-2").value;
    

    const output = document.getElementById("output");

    output.innerHTML =  `The result is ${result(num1, num2, divide)}`;
});