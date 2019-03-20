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

getPersonalData(secretData);

function getPersonalData(secretData) {
  let personDetails = {
    firstName: getName(secretData.aaa),
    lastName: getName(secretData.bbb)
  };
  console.log(secretData, personDetails);
  return personDetails;
}


function getName(number) {
  let result = number === 0 ? "Родриго" : "Эмильо";
  return result;
}




// Task 3

let data = new Object();

data.algebra = [3, 4, 5, 3, 4, 5, ],
  data.geomethry = [4, 4, 4, 4, 5, 5, 2],
  data.biology = [3, 5, 3, 5, 3, 5]

getaverageNotes(Array);

function getaverageNotes(Array) {

  let averageNotes = {
    algebra: getTotalNotes(data.algebra),
    geomethry: getTotalNotes(data.geomethry),
    biology: getTotalNotes(data.biology)
  }
  console.log(averageNotes);
  return averageNotes;
}



function getTotalNotes(arr) {
  let sum = 0;
  for (let value in data) {
    let arr = data[value];
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}


//
//
// function showAverageData() {
//   console.log(averageNotes);
// return averageNotes;
// }

// showAverageData(data);
