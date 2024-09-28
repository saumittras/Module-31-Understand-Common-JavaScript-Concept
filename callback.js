function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("Good Morning", name);
}
function greetEvening(name) {
  console.log("Good Evening", name);
}

greeting(greetingHandler, "tom");
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom  C");
greeting(greetEvening, "Tom  C");
