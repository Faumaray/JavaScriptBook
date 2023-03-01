export function postfixAndPrefix() {
  let a = 1, b = 1;

  const c = ++a; // 2
  const d = b++; // 1

  console.log(`c = ${c}, d = ${d}`);
}

export function assignment() {
  let a = 2;

  const x = 1 + (a *= 2); // 5

  console.log(`x = ${x}`);
}

export function fixPrompt() {
  const a = Number(prompt("Первое число?", "1"));
  const b = Number(prompt("Второе число?", "2"));

  alert(`${a + b}`);
}

/* Все за исключением 2 не работает в TS.
export function type_conversion() {
    console.log("" + 1 + 0);// 10
    console.log("" - 1 + 0); // -1
    console.log(true + false); // 1
    console.log(6 / "3"); // 2
    console.log("2" * "3"); // 3
    console.log(4 + 5 + "px");//9px
    console.log("$" + 4 + 5);//$45
    console.log("4" - 2);//2
    console.log("4px" - 2);// NaN
    console.log("  -9  " + 5);//  -9  5
    console.log("  -9  " - 5);// -14
    console.log(null + 1);// 1
    console.log(undefined + 1);// NaN
    console.log(" \t \n" - 2);// -2
}*/
