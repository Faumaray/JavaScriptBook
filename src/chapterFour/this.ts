function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

const user = makeUser();

console.log(user.ref.name);

const calculator = {
  firstNumber: 0,
  secondNumber: 0,

  sum(): number {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  },
  read() {
    this.firstNumber = Number(prompt("a?", "0"));
    this.secondNumber = Number(prompt("b?", "0"));
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step);
    return this;
  },
};
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
