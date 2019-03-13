"use strict"

function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  percent = parseInt(percent), contribution = parseInt(contribution), amount = parseInt(amount);
  if (percent == "" || isNaN(percent) || contribution == "" || isNaN(contribution) || amount == "" || isNaN(amount)) {
    alert("wrong data input");
  }
  let currentMonth = new Date().getMonth();
  let mortageMonth = date().getMonth();
  let currentYear = new Date().getFullYear();
  let mortageYear = date().getFullYear();
  let totalMonth = currentMonth + (12 - mortageMonth);
  let totalYears = currentYear - mortageYear;
  let totalMonthsToPay = totalMonth + (totalYears * 12);

  let sumOfCredit = amount - contribution;
  percent = percent / 100;
  let monthlyPayment = (sumOfCredit * (percent + percent / ((Math.sqrt(percent) - 1))));
  let totalAmount = monthlyPayment * totalMonthsToPay;

  // Платеж=S*(P+P/(((1+P)^n)-1)), где:
  // S - сумма кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев
  // ^ - возведение в степень



  return totalAmount;
}

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь

  if (name = "") {
    name = "Anonim";
    greeting = `Привет, мир! Меня зовут ${name}`;
    alert (greeting);
    console.log("Anonim");
    return greeting;
  } else {
      return greeting;
  }
}
