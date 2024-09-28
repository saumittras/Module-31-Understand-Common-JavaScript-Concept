/**
 * Truthy:
 * 1. true
 * 2. any number with (ve+ or ve- ) will be truthy other than 0
 * 3. any string other than empty string
 * 4. '0' , 'false'
 * 5. empty object
 * 6.[] empty array
 *
 * Falsy:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. Undefine
 * 5. null
 *
 */
let x = {};
if (x) {
  console.log("Value of x is truthy");
} else {
  console.log("value of x is falsy");
}

// optional: check false
const y = " ";
if (!y) {
  console.log(" Value is falsy");
}

const z = " ";
if (!!z) {
  console.log("Value is truthy");
}
