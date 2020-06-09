window.addEventListener("load", bindEvents);

function bindEvents() {
  var greetButton = document.getElementById("btn");
  greetButton.addEventListener("click", showMyName);
  document.getElementById("clearall").addEventListener("click", clearAll);
}

function showMyName() {
  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var result = `Welcome ${initCap(firstName)} ${initCap(lastName)}`;
  var pWelcome = document.getElementById("welcome");
  pWelcome.innerText = result;
}

function initCap(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

function clearAll() {
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("welcome").innerText = "";
  document.getElementById("first").focus();
}
