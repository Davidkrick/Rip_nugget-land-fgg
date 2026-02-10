function showAlert() {
  alert("!boost");
}

function askUser() {
  let answer = prompt("What is your favorite color?");
  alert("Nice choice Gng: " + answer);
}

function calculateSum() {
  let sum = 5 + 10;
  document.getElementById("result").innerText =
    "The result is: " + sum;
}
