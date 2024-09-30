function greeting(greetingHandler, name) {
  greetingHandler(name);
}

// const number = [45, 54, 78];
// const laptop = { price: 45000, brand: "Lenovo", memory: "8gb" };

function greetingHandler(name) {
  console.log("Good Morning ", name);
}

greeting(greetingHandler, "Saumittra");
