function unique(arr: Array<string>) {
  return Array.from(new Set(arr));
}

function aclean(arr: Array<string>) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arrStrs: Array<string> = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

console.log(aclean(arrStrs));

let arrst: Array<string> = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

console.log(aclean(arrst));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); // name, more
