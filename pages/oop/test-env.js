// ^ ---------------------------------------------------------------------------------------------------------------------------------------------------------*/
//* PROTOYPAL INHERITANCE

// var person = {
//     firstName: 'Default',
//     lastName: 'Default',
//     getFullName: function() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// var john = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// var jane = {
//     firstName: 'Jane'
// }

//! NEVER DO THIS. ONLY FOR DOME TO EXPLAIN PROTO!!!!

// john.__proto__ = person             //! SETTING THE PROTOTYPE OF john TO BE person
// console.log(john.getFullName());    //! John Doe | SEARCH IN john OBJECT DOESN'T FIND IT AND GOES TO PROTO | this BECOMES john OBJECT
// console.log(john.firstName);         //! John | BECAUSE OF THE PROTOTYPE CHAIN -> FIRST LOOKS AT john OBJECT FINDS IT AND RETURNES



// jane.__proto__ = person;            //! SETTING THE PROTOTYPE OF jane TO BE person | POINTING TO THE SAME SPOT IN MEMORY AS john
//  console.log(jane.getFullName())    //! Jane Default 

//* EVERYTHING IS AN OBJECT OR A PRIMITVE

var a = {}; //! Object {}
// console.log(a.__proto__); //! THE BASE OBJECT IN JS --> CALLED OBJECT --> THE VERY BOTTOM OF THE PROTOTYPE CHAIN ALWAYS!!! EVERYTHING LEADS HERE
//! THE BASE OJECT HAS PROPERTIES AND METHODS for example toString() --> ALL OBJECTS HAVE ACCESS TO THIS BECAUSE IT'S THE BOTTOM OF THE PROTOTYPE CHAIN

var b = function() {}; //! f() {} empty function | ANY FUNCTION YOU CREATE WILL HAVE THIS PROTO
// console.log(b.__proto__.);
//! ALL FUNCTIONS WILL HAVE ACCESS TO THIS proto METHODS AND PROPERTIES for example .bind .call .apply

var c = []; //! []

fetch('https://api.liveclass.ro')