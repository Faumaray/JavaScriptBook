export function lastOfWhile() {
  let i = 3;

  while (i) {
    console.log(i--); // 1
  }
}
export function lastOfWhilePrefix() {
  let i = 0;
  while (++i < 5) console.log(i); // 4
}
export function lastOfWhilePostfix() {
  let i = 0;
  while (i++ < 5) console.log(i); // 5
}

export function lastOfFor() {
  for (let i = 0; i < 5; i++) console.log(i); // 4
  for (let i = 0; i < 5; ++i) console.log(i); // 4
}

export function evenNumbers() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

export function rewriteFor() {
  /* for (let i = 0; i < 3; i++) {
            alert( `number ${i}!` );
        }
    */

  let i = 0;
  while (i < 3) {
    console.log(`number ${i++}!`);
  }
}

export function repeatCycle() {
  let num;

  do {
    num = Number(prompt("Введите число больше 100?"));
  } while (num <= 100 && num);
}

export function primes(n: number) {
  nextPrime:
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}
