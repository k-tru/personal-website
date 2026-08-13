// Name: Kien Trung
// Date: 09.01.24
// Section: CSE 190e
// This is the calculator.js page for my custom
// calculator

function compoundInterest(goal, principal, rate) {
  let top = Math.log(goal / principal);
  let bottom = Math.log(1 + rate);
  let years = top / bottom;
  let answer = Math.ceil(years);
  return answer;
}

function getFinal(principal, rate, time, add) {
  for (let years = 1; years <= time; years++) {
    principal += add;
    principal += principal * (rate)
  }
  let answer = Math.round(principal * 100) / 100;
  return answer;
}

function getPrincipal(goal, time, rate) {
  let top = goal;
  let bottom = (1 + rate) ** time;
  let starting = top / bottom;
  let answer = Math.round(starting * 100) / 100
  return answer;
}

window.onload = function() {

  // Button/Start
  let calculate = document.getElementById("calculate");
  calculate.onclick = function() {

    // Retrieving User Inputs
    let principal = document.getElementById("principal");
    let goal = document.getElementById("goal");
    let rate = document.getElementById("rate");
    let add = document.getElementById("add");
    let selectAdd = document.getElementById("selectAdd")
    let time = document.getElementById("time");
    let select = document.getElementById("select");

    let principalAmount = Number(principal.value);
    let goalAmount = Number(goal.value);
    let rateAmount = Number(rate.value / 100);
    let addAmount = Number(add.value);
    let timeAmount = Number(time.value);

    // Function

    if (select.value === "starting") {
      let starting = getPrincipal(principalAmount, rateAmount, timeAmount);

      // Answer
      let output = "<li>You will need to deposit $" + starting + " intially!</li>";
      let answer = document.getElementById("years");
      answer.innerHTML += output;
    } else if (select.value === "final") {

      let final = getFinal(principalAmount, rateAmount, timeAmount, addAmount);

      // Answer
      let output = "<li>You will end up with $" + final + "!</li>";
      let answer = document.getElementById("years");
      answer.innerHTML += output;
    } else {
      let years = compoundInterest(goalAmount, principalAmount, rateAmount);

      // Answer
      let output = "<li>You will need to save for " + years + " years!</li>";
      let answer = document.getElementById("years");
      answer.innerHTML += output;
    }
  }
}