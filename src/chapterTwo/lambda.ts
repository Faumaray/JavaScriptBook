export function ask(question: string, yes: () => void, no: () => void) {
  if (confirm(question)) yes();
  else no();
}
