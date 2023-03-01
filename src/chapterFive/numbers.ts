export function sumFromUser() {
  const a = Number(prompt("Введите первое число"));
  const b = Number(prompt("Введите второе число"));
  console.log(a + b);
}

console.log(Math.round(6.35 * 10) / 10);

function readNumber() {
  let num;

  do {
    num = Number(prompt("Введите число", "0"));
  } while (!isFinite(num));

  if (num === null) return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log(i);
}

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

function randomInteger(min: number, max: number) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

console.log(randomInteger(1, 3));
