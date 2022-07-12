# JavaScript Quiz (Basic Level 2)

## Theory

1. Why do we use functions in **JavaScript**?

> A function is a block of 'reusable code' that is used several times in the JavaScript program where it is defined. JavaScript functions cut out the need to write the same code again, allowing modular coding.The functions eliminate code complexity by enabling re-usability.



2. What is Function Invocation?

> The Function Invocation is used to executes the function code and it is common to use the term “call a function” instead of “invoke a function”. The code inside a function is executed when the function is invoked



3. Does a function behave like an object in Javascript? Prove it by an example.

> In JavaScript, functions are called Function Objects because they are objects. Just like objects, functions have properties and methods, they can be stored in a variable or an array, and be passed as arguments to other functions.

**Example:**

>function message() {<br>
> console.log("Greetings!");<br>
>}<br>
>console.log(typeof message); // => function<br>
>console.log(message instanceof Object); // => true<br>


4. What are Events in Javascript?

> An event is an action that occurs in the web browser, which the web browser feedbacks to you so that you can respond to it.<br><br>

For example, when users click a button on a webpage, you may want to respond to this click event by displaying a dialog box.<br><br>

Each event may have an event handler which is a block of code that will execute when the event occurs.

5. What is a string?

> A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.

6. What is an array? Is it static or dynamic in Javascript?

> JavaScript array is an object that represents a collection of similar type of elements.JavaScript has dynamic arrays: their size is not predetermined, nor the type of data.

7. Difference between map and set in javascript?

>The main difference between Map and Set is that Map is a mapping interface that connects Keys with the values, but Set is the type of interface that collects unique elements, and it can not carry any duplicate element.

8. Difference between Array and Map?

> An **Array** is a collection of elements of the same data type and the **Map** is a hashed structure of key and value pairs.

9. What are array methods? List a few names?

>Array methods are functions built-in to JavaScript that we can apply to our arrays. Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.<br>
Some methods are listed below : 

 ### 1. map( )
 ### 2. sort( )
 ### 3. forEach( )
 ### 4. concat()


10. In how many ways can we traverse through an array in Javascript?

> There are multiple ways one can iterate over an array in Javascript. The most useful ones are mentioned below :
1. Using while loop.
2. Using forEach method.
3. Using every method.
4. Using map.

## Programs
1. Reverse an array? Input: [1, 2, 3, 4, 5, 6]
    ```Js
    const reverseArray = (arr) => {
    arr.reverse();
    return arr;
    }
    const arr = [1,2,3,4,5,6];
    console.log(reverseArray(arr));
2. Explain the properties of the join array method function via program?
    ```Js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.join()); //Banana,Orange,Apple,Mango
    console.log(fruits.join(" and "));//Banana and Orange and Apple and Mango
    ```
3. Show all the values of an array in a html webpage using DOM and forEach method.
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    arr.forEach(item => document.getElementById("fruitsName").innerText += item);
    ```
4. Merge to sets in javascript? 
    ```js
    const set1 = new Set(['one', 'two']);
    const set2 = new Set(['two', 'three']);

    const set3 = new Set([...set1, ...set2]);
    console.log(set3);//Output : Set(3) {'one', 'two', 'three'}
    ```
