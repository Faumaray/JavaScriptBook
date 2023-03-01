let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() == new B()); // true

class Calculator {
  a!: number;
  b!: number;
  read() {
    this.a = Number(prompt("a?", "0"));
    this.b = Number(prompt("b?", "0"));
  }

  sum() {
    return this.a + this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

const calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

class Accumulator {
  value: number;
  constructor(startingValue: number) {
    this.value = startingValue;
  }

  read() {
    this.value += Number(prompt("Сколько добавить?", "0"));
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений
