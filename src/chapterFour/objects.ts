interface Person {
  name?: string;
  surname?: string;
}

const user: Person = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

interface Any {
  [key: string]: any;
}

function isEmpty(obj: Any) {
  for (const _key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

const schedule: Any = {};

alert(`${isEmpty(schedule)}`); // true

schedule["8:30"] = "get up";

alert(`${isEmpty(schedule)}`); // false

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// Переменную нет, а вот его поля объекта можно

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = Object.values(salaries).reduce((sum, current) => sum + current, 0);

console.log(sum);

const menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj: Record<string, any>) {
  Object.keys(obj).filter((key) => typeof (obj[key]) == "number").forEach(
    (key) => {
      obj[key] *= 2;
    },
  );
}

multiplyNumeric(menu);

console.log(menu);
