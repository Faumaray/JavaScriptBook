export function manyQuestions() {
  console.log(null || 2 || undefined);
  //console.log( alert(1) || 2 || alert(3) ); // Не работает в TS потому что console.log и alert возвращают VOID
  console.log(1 && null && 2); // null
  //console.log( alert(1) && alert(2) ); // Не работает в TS потому что console.log и alert возвращают VOID
  console.log(null || 2 && 3 || 4); // 3
}

export function inRange(age: number) {
  if (age >= 14 && age <= 90) {
    console.log("В диапазоне");
  }
}

export function notInRange(age: number) {
  if (!(age >= 14 && age <= 90)) {
    console.log("Не в диапазоне 1");
  }
  if (age < 14 || age > 90) {
    console.log("Не в диапазоне 2");
  }
}

export function questionAboutIf() {
  if (-1 || 0) console.log("first"); // Да
  if (-1 && 0) console.log("second"); // Нет
  if (null || -1 && 1) console.log("third"); // Да
}

export function userLogin() {
  const userName = prompt("Кто там?", "");

  if (userName === "Админ") {
    const password = prompt("Пароль?", "");

    if (password === "Я главный") {
      console.log("Здравствуйте!");
    } else if (password === "" || password === null) {
      console.log("Отменено");
    } else {
      console.log("Неверный пароль");
    }
  } else if (userName === "" || userName === null) {
    console.log("Отменено");
  } else {
    console.log("Я вас не знаю");
  }
}
