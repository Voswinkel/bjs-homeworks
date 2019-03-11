// Task 1
// let a = +prompt("Input a", ""),
//   b = +prompt("Input b", ""),
//   c = +prompt("Input c", ""),
//   diskriminant,
//   x1,
//   x2,
//   roots = [x1, x2],
//   d = b * b - 4 * a * c;
// result = {
//   diskriminant,
//   roots
// }
// result.diskriminant === d;
//
// getSolutions(a, b, c);
// showSolutionsMessage(a, b, c);
//
// function getSolutions(a, b, c) {
//   if (d < 0) {
//     return result = "Дискриминант меньше нуля, уравнение не имеет корней";
//   } else if (d === 0) {
//     x1 = -b / 2 * a;
//     return result;
//   } else if (d > 0) {
//     diskriminant === d,
//       x1 = (-b + (Math.sqrt(d)) / (2 * a)),
//       x2 = (b + (Math.sqrt(d)) / (2 * a));
//     return result;
//   }
// }
//
// function showSolutionsMessage(a, b, c) {
//   result = getSolutions(a, b, c);
//   console.log(result);
// }

//Task 2
let num = 1, num1 = 0,
secretData = {
  aaa: num,
  bbb: num1
}

function personalData(secretData) {
  let aaa = "firstname",
    bbb = "lastName";
  if (num === 0) {
    num = "Родриго";
  } else {
    num = "Эмилио";
  }

  if (num1 === 0) {
    num1 = "Родриго";
  } else {
    num1 = "Эмилио";
  }
console.log(secretData);
}

personalData(secretData);
