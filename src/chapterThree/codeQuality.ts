function pow(x: number, n: number) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

const x = Number(prompt("x?", ""));
const n = Number(prompt("n?", ""));
if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  alert(pow(x, n).toString());
}
