// Task 1
let a = 2,
  b = 40,
  c = 2;

showSolutionsMessage(a, b, c);

function getSolutions(a, b, c) {
  let d = b * b - 4 * a * c;
  let result = new Object();
  result.diskriminant = d;
  result.roots;
  if (d < 0) {
    return {
      diskriminant: d
    };
    // return result.diskriminant;
  } else if (d === 0) {
    x1 = -b / 2 * a;
    result.roots = [x1];
    return {
      roots: [x1],
      diskriminant: d
    };
    // return result.roots, result.diskriminant;
  } else if (d > 0) {
    let x2 = (b + (Math.sqrt(d)) / (2 * a)),
      x1 = (-b + (Math.sqrt(d)) / (2 * a));
    result.roots = [x1, x2];
    return {
      roots: [x1, x2],
      diskriminant: d
    };
    // return result;
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.diskriminant}`);
  if (result.diskriminant > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else if (result.diskriminant === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${x1}`);
  } else {
    console.log(`Уравнение не имеет вещественных корней`);
  }
  return result;
}

//Task 2
let secretData = {
  aaa: 0,
  bbb: 1
};

function personalData(secretData) {
  console.log(secretData);
  secretData.firstName = secretData.aaa;
  secretData.lastName = secretData.bbb;
  delete secretData.aaa;
  delete secretData.bbb;

  for (let key in secretData) {
    if (secretData[key] === 0) {
      secretData[key] = "Родриго";
    } else {
      secretData[key] = "Эмильо";
    }
  }
  return secretData;
}

function showPersonalData(secretData) {

  let result = personalData(secretData);
  console.log(result);
  return result;
}
showPersonalData(secretData);

// Task 3

let data = new Object();

data.algebra = [3, 4, 5, 3, 4, 5, ],
data.geomethry = [4, 4, 4, 4, 5, 5, 2];
data.biology = [3, 5, 3, 5, 3, 5]

let averageAlgebra = 0, averageGeomtry = 0, averageBiology = 0;
let averageNotes = {
  algebra: averageAlgebra,
  geomethry: averageGeomtry,
  biology: averageBiology
}
function getAverageScore(data) {

  let sum = 0;
  let amountOfnotes = 0;
  let average;
  for (let value in data) {
    let arr = data[value];
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      amountOfnotes = arr.length;
    }
  }
  return average = sum / amountOfnotes;
}

averageAlgebra = getAverageScore(data.algebra);
averageGeomtry = getAverageScore(data.geomethry);
averageBiology = getAverageScore(data.biology);

function showAverageData(averageNotes) {
  console.log("Средниe баллы  " + averageNotes);
  return averageNotes;
}

showAverageData(data);
