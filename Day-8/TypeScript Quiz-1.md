#TypeScript Quiz (Basic Level-1)

##Theory
1. ### What are the basic data types in TypeScript?
>The basic data types in TypeScript are - 
>* **number** : It is used to represent both Integer as well as Floating-Point numbers
>* **boolean** : Represents true and false.
>* **string** : Represents a sequence of characters.
>* **void** : Generally used on function return-types.
>* **null** : It is used when an object does not have any value.
>* **undefined** : Denotes value given to uninitialized value.
>* **any** : If variable is declared with any data-type then any type of value can be assigned to that variable.

2. ### What is Generic data type.
>TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.<br>
In generics, we need to write a type parameter between the open (<) and close (>) brackets, which makes it strongly typed collections. Generics use a special kind of type variable <<T>T> that denotes types. The generics collections contain only similar types of objects.
```ts
function identity<T>(arg: T): T {    
    return arg;    
}    
let output1 = identity<string>("myString");    
let output2 = identity<number>( 100 );  
console.log(output1);//  Output : myString
console.log(output2);  //Output : 100
```
3. ### What is type inferring in TS.
>Typescript tries to infer the type if you do not specify one, by determining the type of the initial value assigned to it or based on its usage.<br>
There are two ways types are inferred in Typescript. One is explicit and the other one is implicit
```ts
//Explicit Typing is when we just declare the variable with the types
 
let numVar: number;
let numbers: number[] = [1,2,3]

//In Implicit typing, we do not declare the types. Typescript makes an attempt to deduce the type from its usage.
let numVar=100;    // No Data type is specifed. The typescript will Infer the variable as number.  
                   
numVar = "Hello World";    //Error is thrown here
console.log(numVar); 
```
 
4. ### What are the possible ways to define typing for functions.
>In TypeScript, there are multiple ways for declaring the type of a function<br>

>i. Method Signatures : The method signature syntax is probably the most straightforward to use. When defining an object type, its methods can easily be described by providing signatures as follows:

```ts
    interface Date {
  toString(): string;
  setTime(time: number): number;
  
    }
```
>ii. Function Type Literals : Function type literals are another way to declare the type of a function. They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function:

interface Array<T

```ts
   interface Array<T> {
  sort(compareFn?: (a: T, b: T) => number): this;
  // ...
    } 
```
>iii. Object Type Literals with Call or Construct Signatures : In JavaScript, functions are nothing but special objects than can be called. This fact is reflected in the syntax of object type literals: they describe the shape of an object, which also happens to have a call signature:



```ts
   interface RegExpConstructor {
  // Call signatures
  (pattern: RegExp): RegExp;
  (pattern: string, flags?: string): RegExp;

  // ...

    }
```

5. ### How to define Generic type for Classes.
>TypeScript supports generic classes. The generic type parameter is specified in angle brackets after the name of the class. A generic class can have generic fields (member variables) or methods.
```ts
class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KayValuePair<string, string>();
kvp2.SetKeyValue("CEO", "Bill"); 
kvp2.display(); //Output: Key = CEO, Val = Bill
```

## Programs
1. ### Define the types in typescript for the given following JavaScript code.
```ts
class Student {
  name: string;
  description: string;
  done: boolean;
}

var todos: Student[] = [];

function add(name: string, description: string): number {
  return todos.push({
    name: name,
    description: description,
    done: false,
  });
}

function remove(index: number): Entry[] {
  return todos.splice(index, 1);
}

function list(): void {
  todos.forEach(function (todo: Entry, index: number) {
    console.log(index + " - " + todo.name);
  });
}

function update(index: number, name: string, description: string): Entry {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}