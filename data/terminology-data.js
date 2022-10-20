var terminologyDataArr = [
    {
        title: 'Syntax parser',
        description: "is a program that reads your code and determines what id does and if it's valid."
    },
    {
        title: 'Lexical envirenment',
        description: "is where something seats physically in the code. The scope { }. Global/Local.",
    },
    {
        title: "Execution context",
        description: "is a wrapper created to help managing the code that is running.",
      },
    {
        title: "Single Threaded",
        description: "means, one command is executed at a time, for us programmers JS behaves in a single threaded mannor. From the browsers point of view under the hood there are multiple things happening in the same time.",
      },
    {
        title: "Syncronous",
        description: "means that the lines are executed one at a time in the order that appears.",
    },
    {
        title: "Invocation",
        description: "means running/calling a function.",
    },
    {
        title: "Variable Environment",
        description: "where is the variable in the memory and if they do relate to each other",
    },
    {
        title: "Scope",
        description: "is where a variable is available in your code ( and if it's truly the same variable or a new copy )",
    },
    {
        title: "Asyncronous",
        description: "means more than one at a time.",
    },
    {
        title: "Dynamic Typing",
        description: "means that you don't tell the engine what type of data a variable holds. It figures it out while your code is running.",
    },
    {
        title: "Primitive type",
        description: "is a type of data that represents a single value (not an object).",
    },
    {
        title: "Operator",
        description: "is a special function that is syntatically written different (takes two parameters and returns a result).",
    },
    {
        title: "Operator precendence",
        description: "means which operator function gets called first if there are multiple operators on the same line (higher precedence wins).",
    },
    {
        title: "Associativity",
        description: "means in what order operator functions get called in (left-to-right or right-to-left) for when functions have the same precendence.",
    },
    {
        title: "Coercion",
        description: "means converting a value from one type to another.",
    },
    {
        title: "Namespace",
        description: "a container for variables and functions (to keep the variables and functions with the same name separate).",
    },
    {
        title: "First class functions",
        description: "means that everything you can do with other type (objects, strings, numbers etc) you can do with functions. Assign them to variables, pass them around, create them on the fly.",
    },
    {
        title: "Expression",
        description: "a unit of code that results in a value.",
    },
    {
        title: "Mutate",
        description: "to change something (mutating an object by adding a property, removing a property, changing a property).",
    },
    {
        title: "Arguments",
        description: "are the parameter you pass to a function. JS gives you a keyword which contains them all (is set up by the JS engine 'arguments').",
    },
    {
        title: "Whitespace",
        description: "means invisible characters that create literal space in your written code.",
    },
    {
        title: "Callback",
        description: "means a function you give to another function to be run when the other function is finished.",
    },
    {
        title: "Currying",
        description: "means creating a copy of a function but with preset parameters",
    },
]

var terminologyQuizArr = terminologyDataArr.map((term, key) => {
    return {
        id: key,
        question: `What means ${term.title}?`,
        answer: term.description
    }
})