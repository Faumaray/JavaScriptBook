/* Идентичные
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
*/

export function checkAge(age: number): boolean {
  return (age > 18) || confirm("Родители разрешили?");
}

export function min(a: number, b: number): number {
  return a < b ? a : b;
}

export function pow(x: number, n: number): number | never {
  if (n < 1) {
    throw new Error(
      `Степень ${n} не поддерживается, используйте натуральное число`,
    );
  }

  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}
