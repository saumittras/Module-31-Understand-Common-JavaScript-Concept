let num1 = 5;
let num2 = 7;
function multiply(a, b) {
  a = 27;
  const resutl = a * b;
  return resutl;
}

//premetive type argument pass by value
console.log(num1);
multiply(num1, num2);
console.log(num1);

// object and array pass by reference
let student1 = { name: "Jalil", partner: "Borsha" };
let student2 = { name: "Raj", partner: "anika" };

function makeMovie(couple1, couple2) {
  couple1.name = "Ononto";
  couple2.partner = "Mim";
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
