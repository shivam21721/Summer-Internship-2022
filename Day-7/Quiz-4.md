# JavaScript Quiz (Basic Level 4)
## Theory

1. What are anonymous functions in JavaScript?
    > Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.<br>
    Example : 
    ```js
    var greet = function () {
	    console.log("Hello Everyone!");
        };

    greet();
    ```
2. Explain Strict comparison and Abstract comparison in JavaScript?
    >Abstract equality comparison(aka, loose equality comparison) compares two values for equality, after converting both the values into a common type. In this type of comparison, type coercion is performed by JavaScript.

    >Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared.
    ```js
    console.log(3 == "3"); // true {Abstract Equality}
    console.log(3 === "3"); // false. {Strict Equality}
    ```
3. Difference between arrow function and regular functions?
    > * The first difference is in there declaration. This can be shown as -

    ```js
    //Example of Arrow function.
    var square = (x) => {
    return (x*x);
    };

    //Example of Regular function.
    let square = function(x){
    return (x*x);
    };
    ```
    
    
    > * Regular functions are constructible and they can be   called using the new keyword while the Arrow functions are only callable and not constructible, Arrow functions can never be used as constructor functions
    > * Arrow functions do not have an arguments binding      whereas Regular Functions do.
    > * Arrow functions do not have their own this but Regular functions have

4. What is Hoisting in JavaScript?
    >JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared
5. JavaScript is a garbage collected programming language, explain how?
    >JavaScript is a garbage collected programming language because there’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.<br>
    The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
6. Explain Shallow copy vs Deep copy in Javascript?
    >A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain (sub-)values are still connected to the original variable.
7. What is Object.freeze?
    >The JavaScript Object.freeze() method freezes an object.<br>
    >A frozen object can no longer be changed. Freezing an object prevents:
    >* New properties from being added to the object.
    >* Existing properties to be removed from the object.
    >* Changing the enumerability, configurability, or     writability of existing properties.
    >* Changing values of the existing object properties and prototype.

## Programs
1. Write a function that generates a random number between two ranges, -100 to 0 and800 - 900.
    ```js
    function randomInTwoRange(min1, max1, min2, max2){
     const num1 = Math.floor(Math.random() * (max1 - min1) + min1)
     const num2 = Math.floor(Math.random() * (max2 - min2) + min2)

     console.log(`Random number between [${min1}  ${max1}] is ${num1}`);
     //Output : Random number between [-100  0] is -46
     console.log(`Random number between [${min2}  ${max2}] is ${num2}`);
     //Output : Random number between [800  900] is 862
    }
    randomInTwoRange(-100, 0, 800, 900);
