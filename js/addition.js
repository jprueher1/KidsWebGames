var question1 = 0;
var question2 = 0;
var guess = 0;

document.querySelector("#q1").innerHTML = getRandomInt(0, 10000);
document.querySelector("#q2").innerHTML = question2;

function getRandomInt(min,max) {
  return  Math.floor(Math.random() * (max - min) + min);
}

