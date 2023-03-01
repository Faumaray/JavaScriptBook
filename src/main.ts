import { alertWorld } from "./chapterTwo/helloWorld.ts";
import { workWithVariables } from "./chapterTwo/variables.ts";
import { templateStrings } from "./chapterTwo/types.ts";
import { getUserName } from "./chapterTwo/userActions.ts";
import { assignment, postfixAndPrefix } from "./chapterTwo/math.ts";
import { comparisonOperator } from "./chapterTwo/comparison.ts";
import {
  largeTernar,
  nameOfJavascript,
  octothorpe,
  stringWithNull,
  ternar,
} from "./chapterTwo/conditions.ts";
import {
  inRange,
  manyQuestions,
  notInRange,
  userLogin,
} from "./chapterTwo/logical.ts";
import {
  evenNumbers,
  lastOfFor,
  lastOfWhile,
  lastOfWhilePostfix,
  lastOfWhilePrefix,
  primes,
  repeatCycle,
  rewriteFor,
} from "./chapterTwo/cycle.ts";

import { rewriteIf, rewriteSwitch } from "./chapterTwo/switch.ts";

import { checkAge, min, pow } from "./chapterTwo/function.ts";

import { ask } from "./chapterTwo/lambda.ts";

alertWorld();
workWithVariables();
templateStrings();
getUserName();
postfixAndPrefix();
assignment();
comparisonOperator();
stringWithNull();
nameOfJavascript();
octothorpe();
ternar(1, 5);
largeTernar("User");
manyQuestions();
inRange(21);
notInRange(21);
userLogin();

evenNumbers();
lastOfFor();
lastOfWhile();
lastOfWhilePostfix();
lastOfWhilePrefix();
primes(10);
repeatCycle();
rewriteFor();

rewriteSwitch("Firefox");
rewriteIf();

checkAge(21);
console.log(min(2, 4));
console.log(pow(4, 8));

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение."),
);
