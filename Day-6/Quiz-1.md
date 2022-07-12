# JavaScript Quiz (Basic Level 1)

## Theory

1. What is JavaScript?
   >JavaScript is a Interpreted, High level Programming Language for the Web. It can update and change both the HTML and CSS.
2. What is the difference between let and var?
    >The main difference between let and var is that let is block-scoped and var is function scoped.
3. Why do we prefer const over var?
    >const is prefered over var because it prevents the variable to be assigned to another value.
4. What is the use of javascript in web browsers?
   >Js is used in browsers to make the web pages interactive or to make the content dynamic.

5. What are Objects?
    >In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
6. What is an array and how is it different from an Object in Javascript?
    >An array is a special variable, which can hold more than one value and these values can be accessed by referring to the index number.<br>
    In Javascript, object refers to variables which can have more than one properties and can have methods also whereas in case of array, it is list of values which can be primitive or object.
7. What is a function?
    >A function is a reusable block of code that can be called any no. of times.
8. How can we implementcall by value and call by referencein Javascript?
    >##### Call by value:
    * Function arguments are always passed by value.
    * It copies the value of a variable passed in a function to a local variable.
    * Both these variables occupy separate locations in memory. Thus, if changes are made in a particular variable it does not affect the other one.<br>
It can be implemented as:
    ```JavaScript
    var a = 5;
    var b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);
    ```

    >##### Call by Reference:
    * In JavaScript, all objects interact by reference.
    * If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory.
    * Changes in one object variable affect the other object variable.

    ```JavaScript
    var c = { greeting : 'Hello' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'Hello World';
    console.log(c);
    console.log(d);
    //Output of both the console.log statements will be same.
    ```
9. What are the primitive data types in Javascript?
    >The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
    <br>
    There are seven primitive data types :string, number, bigint, boolean, undefined, symbol, and null.
10. What is DOM?   
    >The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page

## Programs

1. Average of array nums in Javascript?
    ```JavaScript
    const arrayAverage = (arr) =>{
        var sum = 0;
        arr.forEach((num) => { sum += num });
        average = sum / arr.length;
        return average;
    }

    const arr = [1, 2, 3, 4, 5];
    console.log(arrayAverage(arr)); // Output : 3
    ```

2. Swap two numbers by reference?
    ```JavaScript
    const swap = (num1, num2) => {

    let temp = num1;
    num1 = num2;
    num2 = temp; 
    console.log({num1, num2}); // Output : { num1: 2, num2: 1 }
    }
    let num1 = 1;
    let num2 = 2;
    console.log({num1,num2}); //Output : { num1: 1, num2: 2 }
    swap(num1, num2);
3. Print the fibonacci sequence?
    ```JavaScript
    const printFibonacci = (n) => {
        let first = 0, second = 1, next;
    
        console.log(`The first  ${n} terms in Fibonacci Sequence are : `)
        console.log(first);
        console.log(second);
        for (let i = 1; i <=n-2; i++) {
            next = first + second;
            first = second;
            second = next;
            console.log(next);
       
        }
    }
 
    printFibonacci(5);
4. Sort an array by both ascending and descending order?
    ```JavaScript
    const sortAscending = (arr) =>{
    arr.sort(function(a, b){return a-b});
    console.log("Ascending sort : ")
    console.log(arr);
    }
    const sortDescending = (arr) =>{
    arr.sort(function(a, b){return b-a});
    console.log("Descending sort : ")
    console.log(arr);
    }

    sortAscending([40, 100, 1, 5, 25, 10]);
    sortDescending([40, 100, 1, 5, 25, 10]);`

5. Show a variable value in an HTML webpage using DOM?
    ```js
    <div>
        <p id="hello"></p>
    </div>

    <script>
        document.getElementById("hello").innerHTML = "Hello World" ;
    </script>    
