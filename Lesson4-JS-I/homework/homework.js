//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'string' ;

//create a number variable, it an be any number
const newNum = 1 ;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  return str; 
}

function add(x, y) {
  const sum = x + y;
  return sum;   
}

function subtract(x, y) {
  const difference = x - y;
  return difference
}

function multiply(x, y) {
  const product = x * y;
  return product;
}

function divide(x, y) {
  const quotient = x / y;
  return quotient; 
}

function areEqual(x, y) {
  if (x===y) 
   {return true;}
    return false;
}

function areSameLength(str1, str2) {
  if (str1.length===str2.length) 
   {return true;}
    return false;
}


function lessThanNinety(num) {
  if (num < 90)
   {return true;}
    return false;
}

function greaterThanFifty(num) {
  if (num > 50)
   {return true}
    return false
}

function getRemainder(x, y) {
  const remainder = x % y;
  return remainder;
}
function isEven(num) {
  if (num%2===0) 
 {return true;}
 return false;
}


function isOdd(num) {
  if (num % 2===1)
  {return true;}
  return false;
}

function square(num) {
  const sqr = Math.pow(num, 2);
  return sqr;
}
function cube(num) {
  const cube = Math.pow(num, 3);
  return cube;
}

function raiseToPower(num, exponent) {
  const power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  const round = Math.round(num);
  return round;
}

function roundUp(num) {
  const up = Math.ceil(num);
  return up;
}
function addExclamationPoint(str) {
  const myStr = str + '!';
  return myStr;
}

function combineNames(firstName, lastName) {
  const fullname = firstName + ' '+ lastName;
  return fullname;
}

function getGreeting(name) {
  const greet = 'Hello' + ' ' + name + '!';
  return greet;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  const arec = length * width;
  return arec;
}

function getTriangleArea(base, height) {
  const atri = height * base / 2;
  return atri;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
