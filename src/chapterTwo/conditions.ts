export function stringWithNull() {
  if ("0") {
    console.log("Привет");
  }
}

export function nameOfJavascript() {
  const value = window.prompt('Какое "официальное" название JavaScript?', "");

  if (value == "ECMAScript") {
    console.log("Верно!");
  } else {
    console.log("Не знаете? ECMAScript!");
  }
}

export function octothorpe() {
  const value = Number(prompt("Введите число:"));

  if (value > 0) {
    console.log(1);
  } else if (value < 0) {
    console.log(-1);
  } else {
    console.log(0);
  }
}

export function ternar(a: number, b: number) {
  const result = (a + b < 4) ? "Мало" : "Много";

  console.log(result);
}

export function largeTernar(login: string | undefined) {
  const message = (login == "Сотрудник")
    ? "Привет"
    : (login == "Директор")
      ? "Здравствуйте"
      : (login == "")
        ? "Нет логина"
        : "";

  console.log(message);
}
