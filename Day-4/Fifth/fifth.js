const findLargest = (num1, num2, num3) =>{
    if(num1 >= num2 && num1 >= num3)
        return num1;
    else if(num2 >= num1 && num2 >= num3)
        return num2;
    else
        return num3;
}

console.log(`The largest number is ${findLargest(4, 54, 64)}`);
console.log(`The largest number is ${findLargest(23,2,4)}`);
console.log(`The largest number is ${findLargest(23, 34, 12)}`);