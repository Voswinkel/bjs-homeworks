// Task 1
let a = +prompt("Input a", ""),
  b = +prompt("Input b", ""),
  c = +prompt("Input c", ""),
  result = new Object,
  d = b * b - 4 * a * c;

getSolutions(a, b, c);
//sshowSolutionsMessage(a, b, c);

function getSolutions(a, b, c) {
  let x1, roots,
    d = b * b - 4 * a * c;
  result.d === d;

  if (d < 0) {
    console.log(result.d);
  } else if (d === 0) {
    x1 = -b / 2 * a;
    result.roots = [x1];
console.log(result.roots);
  } else if (d > 0) {
    let x2 = (b + (Math.sqrt(d)) / (2 * a)),
    x1 = (-b + (Math.sqrt(d)) / (2 * a));
    result.roots = [x1, x2];
    console.log(result.roots, result.d);
  }
}

function showSolutionsMessage(a, b, c) {
  solution = getSolutions(a, b, c);
  console.log(getSolutions(a, b, c));
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
