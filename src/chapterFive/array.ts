const fruits = ["Яблоки", "Груша", "Апельсин"];

const shoppingCart = fruits;

shoppingCart.push("Банан");
console.log(fruits.length); // 4

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

function sumInput(): number {
  let numbers = [];

  while (true) {
    const value = Number(prompt("Введите число", "0"));

    // Прекращаем ввод?
    if (value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput());

function getMaxSubSum(arr: Array<number>): number {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
