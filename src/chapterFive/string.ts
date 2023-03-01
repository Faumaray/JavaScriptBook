function ucFirst(str: string): string {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("вася"));

function checkSpam(str: string): boolean {
  const lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function truncate(str: string, maxlength: number): string {
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
}

function extractCurrencyValue(str: string): number {
  return +str.slice(1);
}
