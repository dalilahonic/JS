console.log(23 === 23.0); // true
// Base 10 : 0 to 9
// Binary base 2 : 0 and 1

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 3); // false

// Converting string to numbers
console.log(Number('23')); //23
console.log(+'23'); //23
// when JS sees the + operator it will automaticlly convert all the operants to numbers

// Parsing
console.log(Number.parseInt('12px')); // 12
//in order for this to work the string needs to start with a number
console.log(Number.parseInt('e23')); //NaN
console.log(Number.parseInt(23.23)); // 23

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

parseFloat('3.14'); // returns 3.14
parseFloat('3.14abc'); // returns 3.14
parseFloat('abc'); // returns NaN

//parseFloat is a function that parses a string argument and returns a floating-point number.
// It attempts to convert a portion of the input string into a number and stops parsing when it encounters an invalid character.
//The function ignores leading whitespace and stops parsing at the first non-numeric character (excluding the decimal point).
//If the string does not contain any valid numeric characters, parseFloat returns NaN (Not a Number).

// isNaN
// check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN('30e')); // false
console.log(Number.isNaN(+'30e')); // true
console.log(Number.isNaN(23 / 0)); // false

console.log(isNaN('string')); // true
console.log(Number.isNaN('string')); // false

// isFinite
// checking if the value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20E')); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// Math and Rounding

console.log(Math.sqrt(25)); //5
// square root
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2
// cube root

console.log(Math.max(23, 45, 63, 12, 1)); // 63
console.log(Math.max(23, 45, '63', 12, 1)); // 63
console.log(Math.max(23, 45, '63px', 12, 1)); // NaN
console.log(Math.max(23, '45px', 63, 12, 1)); // NaN

console.log(Math.min(23, 45, 63, 12, 1)); // 1

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);
// Math.random() gives us the number between 0 and 1. Math.trunc() removes the decimal part

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.trunc(23.43)); // 23
// Math.trunc() is a method that returns the integer part of a given number by removing the decimal places.

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24
// rounds a number to the nearest integer.
//When the decimal part of the number is less than 0.5, it rounds down to the nearest integer. When the decimal part is 0.5 or greater, it rounds up to the nearest integer.

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
// that rounds a number up to the next highest integer, regardless of the decimal part.

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
// rounds a number down to the next lowest integer, regardless of the decimal part.

// trunc and floor with negative numbers
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals

console.log((2.4).toFixed(0)); // 2
console.log((2.7).toFixed(0)); // 3
// toFixed returns a string
console.log((2.7).toFixed(3)); // 2.700
console.log(+(2.7).toFixed(3)); // 2.7 (number)

//...................Remainder operator

console.log(5 % 2); // 1
// 5 = 2 * 2 + 1
// 8 = 2 * 3 + 2

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(25)); // false

// labelBalance.addEventListener('click', function () {
//     [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//       // 0, 2, 4, 6
//       if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//       // 0, 3, 6, 9
//       if (i % 3 === 0) row.style.backgroundColor = 'blue';
//     });
//   });
  
//...........Numeric Seperators

// 287,460,000,000
// const diametar = 287460000000;
const diametar = 287_460_000_000;
console.log(diametar); // 287460000000

const priceCents = 345_99;

