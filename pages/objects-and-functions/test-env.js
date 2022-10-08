// ------BAD WAY OF CREATING OBJECTS-------

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

// ---------GOOD WAY OF CREATING OBJECTS--------
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

// greet({firstName: 'Vlad', secondName: 'Avram'});    //Object created on the fly when function is invoked
// greet('Vlad')                                       //String created on the go

// Vlad.address2 = {
    // street: '222 Lee St.',
    // city: 'Cluj'
// }

// --------NAMESPACES-------
// JS doesn't have namespaces but we can fake it using namespaces
// var greet = 'Hello';
// var greet = 'Hola';
// console.log(greet); // Hola ( will return the latest value )

// var english = {};
// var spanish = {};

// english.greet = 'Hello'; //Thats one way of faking namespaces using a wrapper the problem is with nesting objects
// spanish.greet = 'Hola';

// english.greetings.greet = 'Hello'; //This will not work because . operator is left associative meaning it will solve the first . and then the other
// greetings doesn't exist on english object ---> undefined.greet ----> cannot set properties of undefined. But we can get help from object literals syntax
// var english = {
    // greetings: {M
        // greet: 'Hello'
    // }
// }

// console.log(english);


// var objectLiterals = {
    // firstName: 'Mary'
// }

// console.log(JSON.stringify(objectLiterals));

// XML data
{/* <object>
    <firstName>Mary</firstName>
</object> */}

// JSON
// '{"firstName": "Mary"}'

// var jsonValue = JSON.parse('{"firstName": "Mary"}');
// console.log(jsonValue);

//FUNCTIONS ARE OBJECTS
// function greet() {
    // console.log('hello');
// }

// console.log(greet)
// greet();

// greet.language = 'english'; //IN OTHER PROGRAMMING LANGUAGES THIS IS NOT POSSIBLE
// console.log(greet.language);


// a = 3;// A UNIT OF CODE

// if ( a === 3 ) { // A IF STATEMENT THAT INSIDE THE PARANTHASES WE PASS AN EXPRESSION THAT RESULT INTO A VALUE -> a === 3

// } //IT DOESNT RETURN INTO A VALUE | YOU CAN'T ASSIGN TO A VARIABLE

// var b = if (a === 3) {
    //DOESNT WORK
// }

// greet()

// function greet() {//FNCTION STATEMENT SAVED INTO MEMEORY AND GETS HOISTED
//THIS IS A STATEMENT BECAUSE ON THE EXECUTION PHASE IT DOES NOTHING UNTIL IT'S INVOKED
    // console.log('hi'); 
// }

// anonymousGreet();

// var anonymousGreet = function() {//FUNCTION EXPRESSION -- WE HAVE AN EQUAL OPERATOR THATS PUTTING THIS OBJECT INTO MEMORY AND IS POINTING THAT 
// VARIABLE TO THE ADDRESS --- NOT LOOKING AT THE NAME ITS LOOKING AT THE ADDRESS 
    // console.log('hi');
// THIS IS AN EXPRESSION BECAUSE WHEN THE EXECUTION CONTEXT REACHES THE LINE IT CREATES AN OBJECT ( RESULTS AN OBJECT )
// }
// anonymousGreet()// THE VARIABLE IS POINTING TO THAT OBJECT AND WE USE () TO INVOKE THE CODE PROPERTY
 
// function log(a) {
    // console.log(a);
// } 

// log(function() {
    // console.log('hi');
// })


//BE VALUE VS BY REFERENCE 



