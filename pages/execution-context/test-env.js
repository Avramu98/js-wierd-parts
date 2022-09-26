//AS EXPECTED

// var a = 'hello a';

// function b() {
//     console.log('hello b');
// }

// console.log(a);
// b();


//HOISTING
// console.log(a); //undefined
// b(); //hello a

// var a = 'hello a';

// function b() {
    // console.log('hello b');
// }


// ---------- UNDEFINED VS IS NOT DEFINED -----------
// var a; //COMMENT AND UNCOMMENT TO SEE THE DIFFERENCES
// var b = 'i am defined' //IF WE ADD A VALUE BY THE TIME WE GET HERE IN THE SECOND PHASE WE HAVE A VALUE

// IF WE DON'T DECLARE var a THEN THE CODE IN MEMORY PHASE SAYS WELL WE DON'T HAVE a IN MEMORY
// AND WE GET 'unchaut reference a is not defined
// console.log({a});

//NEVER SET THE VALUE OF A VARIABLE TO UNDEFINED
// var a = undefined

// if (a === undefined) { //PAY ATTENTION WE USE UNDEFINED AS A KEYWORD NOT IN STRINGS
    // console.log('a is undefined');
// } else {
    // console.log('a is defined')
// }

// if (b === undefined) { //PAY ATTENTION WE USE UNDEFINED AS A KEYWORD NOT IN STRINGS
    // console.log('b is undefined');
// } else {
    // console.log('b is defined')
// }

//EXAMPLE FOR EXECUTION PHASE
// function c() {
    // console.log('hello world');
// }
// var d
// console.log(d);
// var d = 'hello from d';
// console.log(d);
// hello world
// undefined
// hello from d
// ---------- UNDEFINED VS IS NOT DEFINED -----------


//CALL STACK
// function a() {
//     b();
//     console.log('a finished')
// }

// function b() {
//     console.log('b finished')
// }

// a();
//b finished
//a finished

// ----> This happens because everytime a function is called a new execution context is created
// This means that on the execution phase we get to line 71 and we created a execution context for function a
// so function a is on top of the call stack on top of the global context
// on line 63 we have b invocation and we jump in function b creating a new execution context and pushes b on top of a
// on the call stack after line 68 the function is finished and the function is poped off the call stack and we go back to function a
// where we log line 64 the function finishes and we pop a out of the call stack


// ------------- SCOPE / VARIABLE ENVIRONMENTS ----------
// function b() {
    // var myVar; // myVar is created in b EC variable env
    // console.log(myVar);
// }

// function a() {
    // var myVar = 2; // myVar is created in a EC variable env
    // console.log(myVar);
    // b(); // function b EC is created
// }

// var myVar = 1; //Global EC with myVar in that variable env
// console.log(myVar);
// a(); // function a EC is created
// console.log(myVar); //VALUE IS NOT CHANGED BECAUSE THE a AND b EC is finished and we
// are back to the GLOBAL EC
 
// 1
// 2
// undefined

// ---------------- SCOPE CHAINING -------------
// function b() { //LEXICALLY SITS IN THE GLOBAL ENV
//     console.log(myVar); //1 BECAUSE OF THE REFERENCE TO THE OUTER ENV WHERE myVar IS 1
// }

// function a() {
//     var myVar = 2;
//     //WHEN b IS INVOKED A EC WAS CREATED AND CREATES THE OUTER ENV REFERENCE TO THE LEXICAL ENV ( THE GLOBAL ENV )
//     b(); 
// }

// var myVar = 1;
// a();

// function a() {
    // function b() { //LEXICALLY SITS IN THE a ENV
        // console.log(myVar); //2 BECAUSE OF THE REFERENCE TO THE OUTER ENV WHERE myVar IS 2
    // }
    // var myVar = 2;
    //WHEN b IS INVOKED A EC WAS CREATED AND CREATES THE OUTER ENV REFERENCE TO THE LEXICAL ENV ( THE a ENV )
    // b(); 
// }

// var myVar = 1;
// a();
// b(); //CAN'T BE INVOKED HERE BECAUSE THE CREATION PHASE DIDN'T FIND THE FUNCTION b IT JUST SAVED THE CONTENT OF FUNCTION a
// index.js:130 Uncaught ReferenceError: b is not defined

// -------------------- EVENT QUEUE -----------------
// HANDLED ASYNC BUT IN A SYNC WAY
// function waitThreeSeconds() { //FUNCTION SAVED IN THE MEMORY
    // var ms = 3000 + new Date().getTime(); //AFTER THE EC IS CREATED DOES ALL THE VARIABLE ASSIGNMENTS
    // while (new Date() < ms){}
    // console.log('finished function'); //AFTER THREE SECONDS LOGS THIS
// }

// function clickHandler() { //FUNCTION SAVED IN THE MEMORY
    // console.log('click event!'); //LOGS THIS 
// }

// document.addEventListener('click', clickHandler); // ADDED TO EVENT QUEUE WHEN STACK IS EMPTY clickHandler EC IS CREATED

// waitThreeSeconds(); //EC FOR THIS FUNCTION IS CREATED
// console.log('finished execution'); // AFTER waitThreeSeconds IS POPPED OF THE STACK LOGS THIS
//ORDER OF EXECUTION
// finished function
// finished execution
// click event!

