// ------------ OPERATORS ----------

// var a = 4 + 3; //THIS IS A INFIX NOTATION AND IT MEANS THAT THE FUNCTION NAME STAYS
// BETWEEN THE PARAMS
// console.log(a); //OF COURSE ANSWER IS 7

// Operators are a special function under the hood would be something like this
// This operators are prewritten functions from the engine
// function +(param1, param2) {
//     return param1 + param2;
// }

// +(4, 3);
// 3 + 4 //INFIX NOTATION
// + 3 4 //PREFIX NOTATION
// 3 4 + //POSTFIX NOTATION

// ----- COERCION ------
// var a = 1 + 2; //ADDITION
// var a = '1' + '2'; //CONCATENATION

// var a = 1 + '2';
// THE FIRTST PARAM WAS COERCED INTO THE SECOND ONE

// console.log(a);


// --------- COMPARISON OPERATORS --------

// console.log(1 < 2 < 3); //TRUE
// console.log(3 < 2 < 1); //TRUE
// BECAUSE IT WOULD BE COERCED
// LESS THAN HAS ASSOCIATIVTY LEFT TO RIGHT
// 3 < 2 will outup false
// console.log(false < 1)
// Number(false) ----> 0
// Number(true) ----> 1
// console.log(0 < 1) TRUE

// Number(undefined) // NaN
// Number(null) // 0
// Number(false) // 0
// Number(true) // 1
// 3 == 3 // TRUE
// "3" == "3" //TRUE
// "3" == 3 // TRUE
// false == 0 // TRUE
// var a = false;
// a == 0 // TRUE ---> CHANGED THE VALUE OF a to TRUE
// null == 0 // FALSE ---> the fuck null < 1 ---> TRUE

// " " == 0 ---> TRUE
// " " == false ----> TRUE

// ------- EXISTENCE & BOOLEANS ------
// Boolean(undefined); //FALSE
// Boolean(null); // FALSE
// Boolean(''); // FALSE

// var a;
// goes to internet and look for a value

// a = '';
// a = null;
// a = 'something';
// IF THE VALUE OF a CAN BE 0 THERE WILL BE A PROBLEM BECAUSE 0 IS COERCED TO FALSE


// if(a || a === 0) { //TO BE COVERED IF a WILL BE 0
//     console.log('There is something in a');
// } else {
//     console.log('There is nothing there');
// }

// ------- DEFAULT VALUES -------

// function greet(name) { // VALUE WILL BE UNDEFINED
    // WE CAN BYPASS THIS BE GIVING A DEFAULT VALUE
    // name = name || 'Some value here'; 
    // console.log('Hello ' + name) // UNDEFINED IS COERCED TO BE THE STRING UNDEFINED ---> Hello undefined
// }

// greet(); //IN JS YOU CAN CALL THE FUNCTION WITHOUT PASSING A VALUE

// ------- || or OPERATOR BEHAVIOR ------
// true || false //----> TRUE
// undefined || 'hello' //-----> hello IN THIS CASE IT RETURNS THE VALUE THAT CAN BE COERCED TO TRUE Boolean('hello') ---> true
// "hi" || "hello" //----> hi BECAUSE IT RETURNS THE FIRST ONE THAT COERCED TO TRUE
// IF YOU PASS TWO VALUES TO THE OR OPERATOR IT WILL RETURN THE FIRST THAT CAN BE COERCED TO TRUE
// 0 || 1 ---> 1
