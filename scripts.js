
// Business (or back-end) logic:

var add = function(number1, number2) {
  console.log(number1 + " in the add function.")
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// UI:

$(document).ready(function() {
  console.log("ready");
  //the problem is below this line
  $("#add").submit(function(event) {
    debugger;
    console.log("submit happened.");
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    console.log(number1);
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#resultAdd").text(result);

  });
});
