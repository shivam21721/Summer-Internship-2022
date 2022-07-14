# Express Quiz

## Theory

1. ### What is NodeJS?
    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

2. ### What is V8 Engine?
    Chrome V8 is a JavaScript engine, which means that it executes JavaScript code. Originally, JavaScript was written to be executed by web browsers. Chrome V8, or just V8, can execute JavaScript code either within or outside of a browser, which makes server-side scripting possible.
3. ### What is Event Loop in NodeJS.
    The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible.<br>
    **Features of Event Loop:**
    * Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
    * The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
    * The event loop allows us to use callbacks and promises.
    * The event loop executes the tasks starting from the oldest first.

4. ### What is the use of tsconfig.json file?
    The tsconfig.json file allows you to specify the root level files and the compiler options that requires to compile a TypeScript project. The presence of this file in a directory specifies that the said directory is the TypeScript project root.
5. ### 5.What are the methods provided by `fs` module to manipulate files?
    The various methods provided by fs module to manipulate files are - 
    * fs.readFile(fileName [,options], callback) :-  Reads existing file.
    * fs.writeFile(filename, data[, options], callback) :-	Writes to the file. If file exists then overwrite the content otherwise creates new file
    * fs.appendFile(file, data[, options], callback) :- Appends new content to the existing file.
    * fs.readdir(path, callback) :- Reads the content of the specified directory.
     * fs.utimes(path, atime, mtime, callback) :-	Changes the timestamp of the file.

6. ### What is API?
    An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.

7. ### What is JSON format?
    * JSON stands for JavaScript Object Notation
    * JSON is a lightweight data-interchange format
    * JSON is plain text written in JavaScript object notation
    * JSON is used to send data between computers
    * JSON is language independent

8. ### Why we use JSON format for API?
    JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.<br>
    JSON is a much more natural fit for developers to exchange structured data. It did not require the rather inconvenient “data binding” and “data serialization” steps that were notoriously difficult when using XML-based APIs.

9. ### What is a Framework?
   A framework, or software framework, is a platform that provides a foundation for developing software applications. Think of it as a template of a working program that can be selectively modified by adding code. It uses shared resources – such as libraries, image files, and reference documents – and puts them together in one package. That package can be modified to suit the specific needs of the project. With a framework, the developer can add or replace features to give new functionality to the application.

10. ### How an HTTP Communication works.
    Through the HTTP protocol, resources are exchanged between client devices and servers over the internet. Client devices send requests to servers for the resources needed to load a web page; the servers send responses back to the client to fulfill the requests.<br>
    As a request-response protocol, HTTP gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers. HTTP clients generally use Transmission Control Protocol (TCP) connections to communicate with servers.

    HTTP utilizes specific request methods in order to perform various tasks. All HTTP servers use the GET and HEAD methods, but not all support the rest of these request methods:

    * GET requests a specific resource in its entirety
    * HEAD requests a specific resource without the body content
    * POST adds content, messages, or data to a new page under an existing web resource
    * PUT directly modifies an existing web resource or creates a new URI if need be
    * DELETE gets rid of a specified resource
    * TRACE shows users any changes or additions made to a web resource
    * OPTIONS shows users which HTTP methods are available for a specific URL
    * CONNECT converts the request connection to a transparent TCP/IP tunnel
    * PATCH partially modifies a web resource

11. ### What is Middleware in ExpressJS.
    Middleware literally means anything you put in the middle of one layer of the software and another. Express middleware are functions that execute during the lifecycle of a request to the Express server. Each middleware has access to the HTTP request and response for each route (or path) it’s attached to.