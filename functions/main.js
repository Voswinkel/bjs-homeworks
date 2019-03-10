// Task 1
let a = +prompt("Input a", ""),
  b = +prompt("Input b", ""),
  c = +prompt("Input c", ""),
  x1,
  x2,
  d = b * b - 4 * a * c;

getSolutions(a, b, c);

function getSolutions(a, b, c) {
  let result = {
    d,
    x1,
    x2
  }
  result.d === d;

  if (d < 0) {
    alert ("D:" + result.d);
  } else if (a === 0) {
    result.x1 = (-c) / b;
    alert("При а = 0 уравнение решается как линейное x= " + result.x1);
  } else if (d === 0) {
    result.x1 = -b / 2 * a;
    alert("значение_x1: " + result.x1 + "  D: " + result.d);
  } else if (d > 0) {
    result.x1 = (-b + (Math.sqrt(d)) / (2 * a)),
      result.x2 = (b + (Math.sqrt(d)) / (2 * a));
    alert("D: " + result.d + "значение_x1: " + result.x1 + "  значение_x2: " +result.x2);
  }
}
