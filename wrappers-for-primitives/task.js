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
  const loanPercent = parseInt(percent), loanContribution = parseInt(contribution), loanAmount = parseInt(amount);
  if (loanPercent == "" || isNaN(loanPercent) || loanContribution == "" || isNaN(loanContribution) || loanAmount == "" || isNaN(loanAmount)) {
    alert("wrong data input");
  }
  const currentMonth = new Date().getMonth();
  let mortageMonth = new Date(date).getMonth();
  // let mortageMonth = date().getMonth();
  const currentYear = new Date().getFullYear();
  let mortageYear = new Date(date).getFullYear();
  const totalMonth = currentMonth + (12 - mortageMonth);
  const totalYears =  mortageYear - currentYear;
  const totalMonthsToPay = totalMonth + (totalYears * 12);

  const sumOfCredit = loanAmount - loanContribution;
  percent = loanPercent / 100;
  const monthlyPayment = (sumOfCredit * (loanPercent + loanPercent / ((Math.sqrt(loanPercent) - 1))));
  const totalAmount = monthlyPayment * totalMonthsToPay;

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
let greeting = name;
  if (greeting = "") {
  return "Привет, мир! Меня зовут Anonim";
  } else {
      return "Привет, мир! Меня зовут  " + greeting;
  }
}
