// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------*/
// * ------BAD WAY OF CREATING OBJECTS-------
// var person = new Object();

// person['firstName'] = 'Vlad';
// person['lastName'] = 'Avram';

// var firstNameProperty = 'firstName';

// person.address = new Object();
// person.address.street = '111 Lee st.';
// person.address.city = 'Cluj'

// console.log(person);
// console.log(person[firstNameProperty]);
// console.log(person.address);

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
// * ---------GOOD WAY OF CREATING OBJECTS--------
// var person = {
//     firstName:'Vlad',
//     lastName: 'Avram',
//     address: {
//         street: '111 Lee St.',
//         city: 'Cluj'
//     }
// };

// console.log(person);
// console.log(person[firstNameProperty]);
// console.log(person.address);

// var Vlad = {
//     firstName:'Vlad',
//     lastName: 'Avram',
//     address: {
//         street: '111 Lee St.',
//         city: 'Cluj'
//     }
// };

// function greet(person) {
//     console.log('Hi ', person.firstName);
// }

// greet(Vlad);

// greet({firstName: 'Vlad', secondName: 'Avram'}); //!Object created on the fly when function is invoked
// greet('Vlad') // !String created on the go

// Vlad.address2 = {
// street: '222 Lee St.',
// city: 'Cluj'
// }

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
// * --------NAMESPACES-------
// ! JS doesn't have namespaces but we can fake it using namespaces
// var greet = 'Hello';
// var greet = 'Hola';
// console.log(greet); // Hola ( will return the latest value )

// var english = {};
// var spanish = {};

// english.greet = 'Hello'; //Thats one way of faking namespaces using a wrapper the problem is with nesting objects
// spanish.greet = 'Hola';

// english.greetings.greet = 'Hello'; //!This will not work because . operator is left associative meaning it will solve the first . and then the other
//! greetings doesn't exist on english object ---> undefined.greet ----> cannot set properties of undefined. But we can get help from object literals syntax
// var english = {
// greetings: {
// greet: 'Hello'
// }
// }

// console.log(english);

// var objectLiterals = {
// firstName: 'Mary'
// }

// console.log(JSON.stringify(objectLiterals));

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
// * XML data
{
  /* <object>
    <firstName>Mary</firstName>
</object> */
}

// * JSON
// '{"firstName": "Mary"}'

// var jsonValue = JSON.parse('{"firstName": "Mary"}');
// console.log(jsonValue);

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* FUNCTIONS ARE OBJECTS
// function greet() {
// console.log('hello');
// }

// console.log(greet)
// greet();

// greet.language = 'english'; //! IN OTHER PROGRAMMING LANGUAGES THIS IS NOT POSSIBLE
// console.log(greet.language);

// a = 3;// A UNIT OF CODE

// if ( a === 3 ) { //! A IF STATEMENT THAT INSIDE THE PARANTHASES WE PASS AN EXPRESSION THAT RESULT INTO A VALUE -> a === 3

// } //! IT DOESNT RETURN INTO A VALUE | YOU CAN'T ASSIGN TO A VARIABLE

// var b = if (a === 3) {
//! DOESNT WORK
// }

// greet()

// function greet() {//! FUNCTION STATEMENT SAVED INTO MEMEORY AND GETS HOISTED
//! THIS IS A STATEMENT BECAUSE ON THE EXECUTION PHASE IT DOES NOTHING UNTIL IT'S INVOKED
// console.log('hi');
// }

// anonymousGreet();

// var anonymousGreet = function() {// !FUNCTION EXPRESSION -- WE HAVE AN EQUAL OPERATOR THATS PUTTING THIS OBJECT INTO MEMORY AND IS POINTING THAT
//! VARIABLE TO THE ADDRESS --- NOT LOOKING AT THE NAME ITS LOOKING AT THE ADDRESS
// console.log('hi');
//! THIS IS AN EXPRESSION BECAUSE WHEN THE EXECUTION CONTEXT REACHES THE LINE IT CREATES AN OBJECT ( RESULTS AN OBJECT )
// }
// anonymousGreet()// THE VARIABLE IS POINTING TO THAT OBJECT AND WE USE () TO INVOKE THE CODE PROPERTY

// function log(a) {
// console.log(a);
// }

// log(function() {
// console.log('hi');
// })

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* BY VALUE
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a);
// console.log(b);

//* BY REFERENCE
// var c = { greeting: 'hi' };
// var d;

// d = c; //! NOT A COPY --> SAME ADDRESS -> c IS ALREADY EXISTING POINTING TO AN ADDRESS IN MEMORY AND D WILL USE THE SAME ADDRESS
// c.greeting = 'hello'; //! MUTATE

// console.log(c);
// console.log(d);

//* BY REFERENCE AS A PARAMETER
// function changeGreeting(obj) {
// obj.greeting = 'Hola';
// }

// changeGreeting(d);

// console.log(c);
// console.log(d);

// c = { greeting: 'Howdy' } //! = OPERATOR SETS UP NEW MEMORY SPACE ( NEW ADDRESS ) - c NOW POINTS TO A NEW OBJECT ADDRESS
// console.log(c);

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* THIS KEYWORD
// console.log(this); //! Already available 'this' points to the global object

// function a() {
//     console.log(this); //! Also the window object .Will still point to the global object
//     this.newVariable = 'hello'; //! Will add newVariable to the global EC variable env
// }

// var b = function() {
//     console.log(this); //! Also the window object .Will still point to the global object
//! Doesn't matter if it's function statement or expression at this level of the code then 'this' references to the global object
// }

// a();
// console.log(newVariable);
// b();

// var c = {
//     name: 'The c object',
//     log: function() {
//         this.name = 'Updated c object' //! Will update the name property of c object
//         console.log(this);  //! References the c object. When this is used in a method of an object.

//         var setName = function(newName) {
//             this.name = newName; //! Reference the global object and added name to the global EC
//         }
//         setName('Updated again! The c object');
//         console.log(this);
//     }
// }

// c.log();
// console.log(this);

//* FIX FOR THE 'THIS'
// var c = {
//     name: 'The c object',
//     log: function() {
//         var self = this; //! Self is referencing this by reference
//         self.name = 'Updated c object' //! Will update the name property of c object
//         console.log(self); //! References the c object.

//         var setName = function(newName) {
//             self.name = newName; //! Reference the global object and added name to the global EC
//         }
//         setName('Updated again! The c object');
//         console.log(self);
//     }
// }

// c.log();

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//*ARRAY
// var arr = []; //! Array literals
// var arr = new Array();

// var arr = [1, 2, 3]; //! Are zero based meaning arr[0] is the first element

// var arr = [
//   1,
//   false,
//   3,
//   { name: "Vlad", address: "1 dec 1918" },
//   function (name) {
//     var greeting = "Hello ";
//     console.log(greeting + name);
//   },
//   'hello'
// ];
//! Arrays in JS are dynamically typed so it can hold everything

// console.log(arr);
// arr[4](arr[3].name);

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//*Arguments and spread
// function greet(firstName, lastName, language) {
  //! MEMORY SETUP FOR THOSE THREE PARAMS AND IN EXECUTION PHASE WILL BE UNDEFINED WITHOUT ANY OTHER VALUE
  // console.log(firstName);
  // console.log(lastName);
  // console.log(language);
  // console.log('-----');
// }

// greet(); //! WORKS BUT GETS UNDEFINED
// greet('John'); //! John, undefined, undefined
// greet('John', 'Doe') //! John, Doe, undefined
// greet('John', 'Doe', 'es') //! John, Doe, es

//* Default params
// function greet(firstName = 'John', lastName = 'Doe', language = 'es') { //! BY SETTING DEFAULT VALUES IF THE VALUE IS UNDEFINED WILL HAVE A SAFENET VALUE
  // console.log(firstName);
  // console.log(lastName);
  // console.log(language);
  // console.log(arguments);
  // console.log('-----');
// }

// greet(); //! John, Doe, es
// greet('John'); //! John, Doe, es
// greet('John', 'Doe') //! John, Doe, es
// greet('NotJohn', 'Doe', 'es') //! NotJohn, Doe, es

//* Arguments keyword
// function greet(firstName, lastName, language) { //! BY SETTING DEFAULT VALUES IF THE VALUE IS UNDEFINED WILL HAVE A SAFENET VALUE

  //! arguments keyword is an array like -> looks like an array, acts like an array but is not an array
  // if (arguments.length === 0) {
    // console.log('Missing arguments');
    // console.log('-----');
    // return
  // }

  // console.log(firstName);
  // console.log(lastName);
  // console.log(language);
  // console.log('-----');
// }

// greet(); //! missing arguments
// greet('John'); //! John, undefined, undefined
// greet('John', 'Doe') //! John, Doe, undefined
// greet('NotJohn', 'Doe', 'es') //! NotJohn, Doe, es

//* Spread operator
// function greet(firstName, lastName, language, ...other) { 
//! USING THE SPREAD OPERATOR TAKES ALL THE OTHER PARAMS AND ADDS THEM TO A NEW ARRAY 'other' IN THIS CASE
  // console.log(firstName);
  // console.log(lastName);
  // console.log(language);
  // console.log(other); //! [mainStreet, Cluj]
  // console.log('-----');
// }

// greet('NotJohn', 'Doe', 'es', 'main Street', 'Cluj') //! NotJohn, Doe, es, [mainStreet, Cluj]

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* Function overloading
//! IN JS WE CAN'T USE THE SAME FUNCTION NAME WITH DIFFERENT PARAMETERS BUT WE HAVE A WORKAROUND

// function greet(firstName, lastName, language = 'en') {
//   if (language === 'en') {
//     console.log('Hello ' + firstName + ' ' + lastName);
//   }

//   if (language === 'es') {
//     console.log('Hola ' + firstName + ' ' + lastName);
//   }
// }

// function greetEnglish(lastName, firstName) {
  //! FUNCTION CREATED FOR ENGLISH GREETS WITH 'en' AS DEFAULT PARAM TO THE GREET FUNCTION
  // greet(firstName, lastName, 'en')
// }

// function greetSpanish(lastName, firstName) {
    //! FUNCTION CREATED FOR ENGLISH GREETS WITH 'es' AS DEFAULT PARAM TO THE GREET FUNCTION
  // greet(firstName, lastName, 'es')
// }

// greet('John', 'Doe', 'en'); //! LANGUAGE PASSED HERE AS PARAM
// greet('John', 'Doe', 'es'); //! LANGUAGE PASSED HERE AS PARAM
// greetEnglish('John', 'Doe'); //! AVOIDED PASSING MORE PARAMS CALLING SPECIFIC FUNCTIONS
// greetSpanish('John', 'Doe'); //! AVOIDED PASSING MORE PARAMS CALLING SPECIFIC FUNCTIONS

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* IIFE - Immediately invoked functions expressions

// function greet(name) {//! FUNCTION STATEMENT, SAVED INTO MEMORY DOES NOTHING UNTIL IT'S INVOKED
  // console.log(name);
// }
// greet('Vlad');

// var greet = function(name) {//! FUNCTION EXPRESSION VARIABLE GETS HOISTED SET TO UNDEFINED IN EXECUTION PHASE INVOKED AND CODE RAN
  // console.log(name);
// }
// greet();

// var greet = function(name) { //! IIFE IT'S A FUNCTION EXPRESSION 
  // return name //! THE RETURN OF name MEANS THAT THE GREET VARIABLE IS NOT A FUNCTION ---> IS A STRING AND CAN'T BE CALLED
// }('John'); //! INVOKED IMMEDIATELY WITH THE 'John' VALUE

// console.log(greet); //! WILL RESULT INTO 'John'
// console.log(greet()) //! GREET IS NOT A FUNCTION 

//* HOW DO WE TRICK THE SYNTTAX PARSER INTO READING A FUNCTION EXPRESSION AS A FUNCTION STATEMENT - CLASSIC IIFE
// function(name) {//! THIS WILL NOT WORK BECAUSE WHEN SYNTAX PARSER REACHES THIS LINE AND SEES THE WORD function EXPECTS A NAME TO THE FUNCTION STATEMENT
  // console.log(name)
// }

// (function(name) {//! IF WE WRAP THE FUNCT STATEMENT INSIDE PARANTHESES THE PARSER WILL THINK THAT IT'S AN EXPRESSION --> RETURNS SOMETHING GROUPING OPERATOR
  // console.log('From IIFEE ' + name);
// }('John')) //! AND WE INVOKE IT ON THE FLY --> THIS IS A CLASSIC USE OF IIFE

// (function(name) { //! WORKS WITH NAMED TOO --> IIFE RECOMMANED TO BE ANONMYOUS
  // console.log(name);
// }('Vlad'))

//* USE CASE OF IIFE TO AFFECT THE GLOBAL OBJECT
// var greetingVariable = 'Hola'; //! VARIABLE SET IN THE GLOBAL EC
// console.log(greetingVariable); //! Hola

// (function(global, greeting){ //! IIFE THAT GETS TWO PARAMS ONE IS FOR window OBJECT AND A greeting THATS A STRING --> COMMON PATTERN
  // global.greetingVariable = greeting; //! DIRECTLY AFFECT THE GLOBAL OBJECT VARIABLE
  // console.log(greeting); //! Hello
// }(window, 'Hello')) //! PASSING window OBJECT AS PARAM

// console.log(greetingVariable); //! Hello --> CHANGED THE GLOBAL VARIABLE FROM INSIDE THE IIFE

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* CLOSURES

// function greet(whatToSay) {
  //! A FUNCTION THAT RETURNS A FUNCTION
//   return function(name) {
//     console.log(whatToSay + ' ' + name);
//   }
// }

// greet('Hi') //!THIS RETURNS A FUNCTION
// greet('Hi')('Tony') //! RETURNS A FUNCTION AND YOU ARE ABLE TO INVOKE THE OTHER FUNCTION

// var sayHi = greet('Hi') //! sayHi IS THE FUNCTION RETURNED FROM greet
// sayHi('Tony') //! Hi Tony

// function greet(whatToSay) {
//   return function(name) {
//     console.log(whatToSay + ' ' + name)
//   }
// }

// var sayHi = greet('Hi');
// sayHi('Tony');

//* HARD CLOSURE EXAMPLE

// function buildFunctions() {
//   var arr = []; //! arr SAVED INTO MEMORY

//   for (var i = 0; i < 3; i++) { //! WILL RUN UNTIL i=3
//     arr.push( //! FUNCTION OBJECT IS CREATED NOT EXECUTED WE JUST ADD THE CODE TO THE CODE PROPERTY
//       function() {
//         console.log(i);
//       }
//     )
//   }
//   return arr; //! [f0,f1,f2] AT THIS MOMENT i=3 --> WHEN THE FUNCTION EC IS POPPED OFF THE STACK i=3 and arr=[f0,f1,f2]
// }

// var fs = buildFunctions(); //! EC IS CREATED 

// fs[0](); //! 3 EC IS CREATED FOR EACH FUNCTION CALL i IS MISSING FROM THE EC AND LOOK IN THE OUTER ENV WICH IS buildFunctions MEMORY -> i=3 WHEN WE CALL THIS
// fs[1](); //! 3
// fs[2](); //! 3

//* SIMEPLE WAY OF SOLVING THIS WEIRD STUFF - ES6

// function buildFunctions() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     let j = i; //! let IS SCOPED TO THE BLOCK EVERYTIME THE FOR LOOP RUNS WILL BE A NEW VARIABLE IN MEMORY WILL BE SEGMENTED IN MEMORY
//     arr.push(
//       function() {
//         console.log(j); //! WHEN THIS IS CALLED WILL POINT TO DIFFERENT SPOT IN MEMORY
//       }
//     )
//   }

//   return arr;
// }

// fs[0]();
// fs[1]();
// fs[2]();

//* IIFE WAY OF DOING STUFF

// function buildFunctions() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(
//      (function(j) { //! CREATED A NEW FUNCTION OBJECT WITH j AS A DIFFERENT VARIABLE IN EVERY EC EVERYTIME THE FOR LOOP RUNS
//         return function() {
//           console.log(j)
//         }
//      }(i)) //! IMMEDIATELY CALLING RETURNING ANOTHER FUNCTION
//     )
//   }

//   return arr;
// }

// fs[0]();
// fs[1]();
// fs[2]();

//* FUNCTION FACTORIES - EXAMPLE

// function makeGreeting(language) { //! FOR THE FIRST EC language WILL BE 'en' | FOR THE SECOND 'es' --> DIFFERENT EC
  
//   return function(firstName, lastName) {

//     if (language === 'en') { //! DEPENDING ON THE EC THE MEMORY FOR language VAR WILL BE 'en' OR 'es'
//       console.log('Hello ' + firstName + ' ' + lastName)
//     }

//     if (language === 'es') {
//       console.log('Hola ' + firstName + ' ' + lastName)
//     }

//   }

// } 

// var greetEnglish = makeGreeting('en'); //! EVERYTIME A FUNCTION IS INVOKED IT CREATES A NEW EXECUTION CONTEXT
// var greetSpanish = makeGreeting('es'); //! DOESN'T MATTER HOW MANY TIME IS CALLED

// greetEnglish('John', 'Doe'); //! Hello John Doe
// greetSpanish('John', 'Doe'); //! Hola John Doe

//* CLOSURES AND CALLBACKS - YOU ARE ALWAYS USING CLOSURES AND CALLBACKS

// function sayHiLater() {
//   var greeting = 'Hi!';

//   setTimeout(function() { //! TAKES A FUNTION OBJECT | CREATING FUNCTION ON A FLY USING FUNCTION EXPRESSION | FIRST CLASS FUNCTIONS
//     console.log(greeting); //! THE FUNCTION PASSED TO OTHER FUNCTION IS A CALLBACK TO BE EXECUTED AT THE END OF THAT FUNCTION
//   }, 3000)
//   //! FUNCTION FINISHES AND AFTER 3 SECONDS RUNS THE FUNCTION AND AGAIN EC OF sayHiLater IS FINISHED AND THANKS TO CLOSURE WE STILL HAVE ACCESS TO THE ENV VARIABLE TO GET greeting
// }

// sayHiLater(); //! IS A CLOSURE 

//* CALLBACK EXAMPLE

// function tellMeWhenDone(callback) {
//   var a = 1000;
//   var b = 2000; //! CAN BE ANY PIECE OF CODE

//   callback();
// }

// tellMeWhenDone(function() {
//   console.log('I am done');
// })

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* CALL() BIND() APPLY()

var person = {
  firstName: 'Vlad',
  lastName: 'Avram',
  getFullName: function() {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
}

// var logName1 = function(lang1, lang2) {
//   console.log('logged: ' + this.getFullName()); //!THIS WILL FAIL BECAUSE AT THIS LEVEL this IS GLOBAL ENV AND getFullName DOESN'T EXIST
// }

// logName1() //! UNDEFINED IS NOT A FUNCTION

var logName2 = function(lang1, lang2) {
  console.log('logged: ' + this.getFullName()); //! this WILL REFERENCE person OBJECT --> person.getFullName()
  console.log('Arguments ' + lang1 + ' ' + lang2);
  console.log('---------');
} //! YOU CAN ALSO ADD .bind AT THE END OF THE FUNCTION OBJECT AND STILL CREATES A NEW FUNCTION OBJECT BOUND TO person

// var logPersonName = logName2.bind(person) //!MAKES A COPY OF logName2 FUNCTION OBJECT WHEN IT'S EC IS CREATED JS SEES THAT WAS CREATED WITH BIND 

// logPersonName(); //! Logged Vlad Avram
// logPersonName('en', 'es'); //! YOU CAN STILL PASS ARGUMENTS BEING A COPY OF THE FUNCTION OBJECT

//! .bind() CREATES A COPY OF THE FUNCTION OBJECT AND TELLS WHAT this IS

// logName2.call() //! DOES THE SAME THING AS () , CALLS THE FUNCTION
// logName2.call(person, 'es', 'en') //! BUT IT ALSO LETS ME TELL WHAT this IS. THE DIFFERENCE BETWEEN CALL AND BIND IS THAT CALL EXECUTES THE FUNCTION
//! FIRST PARAM OF call IS THE OBJECT AND THE OTHERS ARE THE DEFAULT PARAMETERS

// logName2.apply();
// logName2.apply(person, ['es', 'en'])  //! DOES THE SAME THING AS call THE MAIN DIFFERENCE IS THAT YOU HAVE TO PASS THE ARGUMENTS AS AN ARRAY


// (function(lang1, lang2) {
//   console.log('logged: ' + this.getFullName()); 
//   console.log('Arguments in IIFE' + lang1 + ' ' + lang2);
//   console.log('---------');
// }).apply(person, ['es', 'en']) //! WE CAN TRICK JS AND CREATE AND IIFE AND .apply() TO EXECUTE

//* REAL LIFE EXAMPLE - FUNCTION BORROWING

// var person1 = {
//   firstName: 'Vlad',
//   lastName: 'Avram',
//   getFullName: function() {
//     var fullName = this.firstName + ' ' + this.lastName;
//     return fullName;
//   }
// }

// var person2 = {
//   firstName: 'Jane',
//   lastName: 'Doe'
// }

// console.log(person1.getFullName.apply(person2));              //! Jane Doe
//! WE BORROWED A FUNCTION AND GOT THE METHOD FROM THE person1 AND APPLIED TO person2 FIRST NAME AND LAST NAME

//* REAL LIFE EXAMPLE - FUNCTION CURRYING (bind())

// function multiply(a, b) {
//   return a * b;
// }

// var multiplyByTwo = multiply.bind(this, 2);     //! REMEMBER bind() IS NOT CALLING
// console.log(multiplyByTwo(4));                                                //! A COPY OF THE multiply FUNCTION IN THIS CASE 'this' IS NOT DOING ANYTING. GIVING A PARAMETER SETS THEPERMANENT VALUE OF THE FUNCTION OBJECT PARAMETER 
// function multiplyByTwo(b) { //! EQUIVELENT OF THIS FUNCTION
  // var a = 2;
  // return 2 * b
// }

// var multiplyBothParams = multiply.bind(this, 2, 2)   //! THIS WILL ALWAYS BE THE VALUE OF a AND b PERMANENT COPY PARAMS
// console.log(multiplyBothParams(20, 20))             //! ALWAYS 4

// console.log(multiplyByTwo(4)); //! 8

// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------
//* FUNCTIONAL PROGRAMMING

// var arr1 = [1,2,3];

//! NON FUNCTIONAL WAY OF DOUBLING THE VALUES OF AN ARRAY
// function mapForEach(arr) {

//   var newArr = [];

//   for (var i=0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2)
//   }

//   return newArr;
// }

// const arr2 = mapForEach(arr1);
// console.log(arr2);

// function mapForEach(arr, fn) {

//   var newArr = [];

//   for (var i=0; i < arr.length; i++) {
//     newArr.push(
//       fn(arr[i])
//     )
//   }

//   return newArr;
// }


// var arr3 = mapForEach(arr1, function(item) {
//   return item * 2;
// })

// console.log(arr3);

// var arr3 = mapForEach(arr1, function(item) {
//   return item > 2;
// })
// console.log(arr3);

//  function checkPastLimit(limiter, item) {
//   console.log(arguments);
//     return item > limiter
// }

// var arr3 = mapForEach(arr1, checkPastLimit.bind(this, 2));
// console.log(arr3);


// var checkPastLimit = function(limiter) {
//   return function(limiter, item) {
//   return item > limiter;
// }.bind(this, limiter)
// }

// var arr4 = mapForEach(arr1, checkPastLimit(2));
// console.log(arr4);


//! UNDERSCORE LIBRARY CHECK IT FOR COMMENTS
// var arr6 = _.map(arr1, function(item) {return item*3})
// console.log(arr6);






