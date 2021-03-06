function initCheckBirthday() {
  const birthday = document.getElementById('birthday').value;

  const result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
  // код для задачи №1 писать здесь
  let now = new Date();
  now = Date.parse(now);
  birthday = Date.parse(birthday);

  let diff = now - birthday;
  age = diff / 31536000000;
  age = Math.round(age);
  if (age < 18) {
    console.log(`Несовершеннолетний: ${age} лет`)
  } else {
    console.log(`Совершеннолетний: ${age} лет`)
  }
  return age;
}

function initPrintAnimalSound() {
  const animal = {
    sound: 'grrrr',
  };

  const result = getAnimalSound(animal);

  document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
  // код для задачи №2 писать здесь
  let sound = animal.sound;
  if (sound === "undefined") {
    return null;
  } else {
    return sound;
  }
}

function initCalculateStatement() {
  for (let idx = 0; idx < 3; idx++) {
    const marks = document.getElementById('learner-' + idx).value.split(',');

    const average = getAverageMark(marks);

    document.getElementById('learner-' + idx + '-average').innerHTML = average;
  }
}

function getAverageMark(marks) {
  // код для задачи №3 писать здесь

  for (i = 0; i<marks.length; i++){
    total[i] = i++;
  }
  let average = total / marks.length;
  console.log(average);
  return average;
}
