"use strict"

function calculateQuadraticEquation() {
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = getResult(a, b, c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = " + result;
}

function getResult(a, b, c) {
  let d = b * b - 4 * a * c, result;

  if (d < 0) {
    return("уравнение не имеет корней");
  } else if (d === 0) {
    result = (b + (Math.sqrt(d)) / (2 * a));
    return result;
    } else if (d > 0) {
        var x1 = (-b + (Math.sqrt(d)) / (2 * a)),
            x2 = (b + (Math.sqrt(d)) / (2 * a));
            result = [x1, x2];
        return result;
      }
}




      function calculateDrinkTask() {
        let name = window.personName.value;
        let dateOfBirthday = new Date(window.dateOfBirthday.value);
        let drink = askDrink(name, dateOfBirthday);
        window.drink.textContent = drink;
      }

      function askDrink(name, dateOfBirthday) {
        let yearOfBirth = dateOfBirthday.getFullYear(),
            presentYear = new Date().getFullYear(),
            age = (presentYear - yearOfBirth);

        if (age < 18) {
        return age;
        alert(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
        } else {
          return age;
          alert(`Не желаете ли олд-фэшн, ${name}?`)
        }
        console.log(age);
      }

      function calculateAverageRating() {
        let marks = window.marks.value.split("").map(Number);
        let averageMark = getAverageMark(marks);
        window.averageMark.textContent = averageMark;
      }

      function getAverageMark(marks) {
       // код для задачи №3 писать здесь
        let totalAmountOfMarks, mark, avaerageNote;
        for ( let i = 0; marks.length > 5; marks.splice(5)) {
           console.log("Количество оценок большe пяти");
           console.log(marks);
          }
        for ( mark in marks) {
        console.log(marks);
        }

        avaerageNote = totalAmountOfMarks / marks.length;
        return avaerageNote;
    }
