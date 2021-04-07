var add = function(number1, number2){
  return number1+number2;
};
var sub = function(number1, number2){
  return number1 - number2
};
var multi = function(number1, number2){
  return number1 * number2
};
var divide = function(number1, number2){
  return number1 / number2
};

var bmi = (height, weight) => {
  return weight/(height ^ 2)
};

var height = parseInt(prompt("Enter height: "));
var weight = parseInt(prompt("Enter weight: "));
var total = bmi(height, weight);
Math.
// var total2 = sub(number1, number2);
// var total3 = multi(number1, number2);
// var total4 = divide(number1, number2);

alert(total);

