// Task 1
let a = 2,
  b = 8,
  c = 2;

getSolutions(a, b, c);
showSolutionsMessage(a, b, c);

function getSolutions(a, b, c) {
     let d = b * b - 4 * a * c;
let result = new Object();
result.diskriminant = d;
result.roots;
  if (d < 0) {
    return result.diskriminant;
  } else if (d === 0) {
    x1 = -b / 2 * a;
    result.roots = [x1];
return result.roots, result.diskriminant;
  } else if (d > 0) {
    let x2 = (b + (Math.sqrt(d)) / (2 * a)),
    x1 = (-b + (Math.sqrt(d)) / (2 * a));
    result.roots = [x1, x2];
    return result.roots, result.diskriminant;
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
return result;
}

//Task 2
let num = 1,
  num1 = 0,
  secretData = {
    aaa: num,
    bbb: num1
  }
//
// function personalData(secretData) {
//   let aaa = "firstname",
//     bbb = "lastName";
//   if (num === 0) {
//     num = "Родриго";
//   } else {
//     num = "Эмилио";
//   }
//
//   if (num1 === 0) {
//     num1 = "Родриго";
//   } else {
//     num1 = "Эмилио";
//   }
//   console.log(secretData);
// }

//personalData(secretData);
