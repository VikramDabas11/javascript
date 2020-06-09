window.addEventListener("load", bindEvents);
function disable() {
  document.addEventListener(
    "contextmenu",
    (event) => event.preventDefault(),
    false
  );
  console.log("disable client call");
}
function bindEvents() {
  //var bt = document.querySelectorAll('.num');
  var input = document.querySelector("#txt");
  input.addEventListener("keyup", validate);
  disable();
  var buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.addEventListener("click", takeInput));
  document.querySelector("#equal").removeEventListener("click", takeInput);
  document.querySelector("#equal").addEventListener("click", compute);
  var clear = document
    .querySelector("#clear")
    .addEventListener("click", () => clearAll(input));
}
var isValid = true;
function validate() {
  if (this.value >= "0" && this.value <= "9") {
    // console.log("Valid");
    isValid = true;
  } else if (this.value == "+" || this.value == "-" || this.value == "*") {
    isValid = true;
  } else {
    // console.log("Not Valid");
    isValid = false;
  }
}
function takeInput() {
  //validate();
  document.querySelector("#txt").value += this.innerText;
}
function compute() {
  // console.log("Compute Call ", isValid);
  if (isValid) {
    document.querySelector("#txt").value = eval(
      document.querySelector("#txt").value
    );
  }
}

function clearAll(input) {
  input.value = "";
}
