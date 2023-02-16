/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers1(a,b){
    return a + b;
}
let sum1 = addTwoNumbers1(4,5);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => {
    return a + b;
}
let sum2 = addTwoNumbers2(4,5);
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a,b) =>  a + b;
console.log(addTwoNumbers3(4,5));

// Implicit Returns
const saySomething = (message) => console.log(message);
saySomething("Hello");

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        Hey, how are you!
    </p>
    `)
console.log(returnMultipleLines());
