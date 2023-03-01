function camelize(str: string): string {
  return str
    .split("-").map(
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}

function filterRange(arr: Array<number>, a: number, b: number): Array<number> {
  return arr.filter((item) => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

function filterRangeInPlace(arr: Array<number>, a: number, b: number) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]

let arr_2 = [5, 2, 1, -10, 8];

arr_2.sort((a, b) => b - a);

console.log(arr_2);

function copySorted(arr: Array<string>): Array<string> {
  return arr.slice().sort();
}

let arr_3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr_3);

console.log(sorted);
console.log(arr_3);
interface User {
  name: string;
  age: number;
}

function sortByAge(arr: Array<User>) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya: User = { name: "Вася", age: 25 };
let petya: User = { name: "Петя", age: 30 };
let masha: User = { name: "Маша", age: 28 };

let arrUsers = [vasya, petya, masha];

sortByAge(arrUsers);

// теперь отсортировано: [vasya, masha, petya]
alert(arrUsers[0].name); // Вася
alert(arrUsers[1].name); // Маша
alert(arrUsers[2].name); // Петя

function shuffle(array: Array<number>) {
  array.sort(() => Math.random() - 0.5);
}

let arrNumbers = [1, 2, 3];
shuffle(arrNumbers);
console.log(arrNumbers);

function unique(arr: Array<string>): Array<string> {
  let result: Array<string> = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));
