/**
 * 8 ways to get Undefine
 * 1. a veriable without assign value
 * 2. a function wothout return
 * 3. a function call with less argument than parameters
 * 4. a function with undefine return
 * 5. trying to acces unexisting property of an object
 * 6. trying to acces to an array element which index is out of range
 * 7. delete an element inside an array
 * 8. assign a variable with undefine value
 *
 *
 *
 */
// we cannt declear a constant without its value . example: const a;

let first;
console.log(first); // here we will get an undefine

function second(a, b) {
  const total = a + b;
}

second(4, 5); // we will get undefine

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}

function nonZero(a, b) {
  if (a < 0 || b < 0) {
    return;
  } else {
    return a + b;
  }
}

const fifth = { id: 2, name: "ponchom", age: 40 };

console.log(fifth.age, fifth.salary);

const sixth = [4, 89, 87, 56, 54];
console.log(sixth[6]);
// this is not recommended for delete an arrat item from an array
delete sixth[1];
const data = { result: [], update: null };

console.log(typeof null);
