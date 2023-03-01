function sumSalaries(salaries: object) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

alert(sumSalaries(salaries));

function count(obj: object) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user)); // 2
