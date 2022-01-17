// Декларативность
const people = [
  {
    name: 'Bill',
    money: 10000,
  },
  {
    name: 'Jack',
    money: 100,
  },
  {
    name: 'Frank',
    money: 3000,
  },
  {
    name: 'Petr',
    money: 1000,
  },
  {
    name: 'Ivan',
    money: 4000,
  },
  {
    name: 'Alina',
    money: 15000,
  },
  {
    name: 'Maria',
    money: 13000,
  },
  {
    name: 'Nikolas',
    money: 1000,
  },
];

// Сортируем богытых
const sortPeopleByMoney = people =>
  [...people].sort((first, second) => first.money - second.money);
console.log(sortPeopleByMoney(people));

// Берем первых N-людей
const getTopOfPeople = (people, count) => people.slice(0, count);

// Считаем богатство
const getTotalFortuneOfPeople = people =>
  people.reduce((total, person) => total + person.money, 0);

// Считаем самымых богатых
const getTotalFortuneOfRichest = (people, count) => {
  const sortedPeopleByMoney = sortPeopleByMoney(people);
  const topOfPeople = getTopOfPeople(sortedPeopleByMoney, count);

  return getTotalFortuneOfPeople(topOfPeople);
};

getTotalFortuneOfRichest(people, 10);

///////////
// Композиция
const compose = (...functions) => {
  return initialValue =>
    functions.reduceRight((result, func) => func(result), initialValue);
};

// Приводим функцию к верхнему регистру
const upperCase = str => str.toUpperCase();

// Добавляем восклицательный знак
const exclaim = str => `${str}!`;

// Повторяем строку трижды
const repeat = str => `${str} `.repeat(3);

const withСompose = compose(repeat, exclaim, upperCase);

console.log(withСompose('Сротал')); // СРОТАЛ! СРОТАЛ! СРОТАЛ!

//////////

// Каррирование
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально
console.log(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
console.log(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов

function curry(func) {
  // Новую функцию можно вызывать со случайным кол-вом аргументов
  // Поэтому складываем их в массив
  return function curried(...args) {
    // Если все аргументы были переданны
    // Например для sum() нужно чтобы было передано 3 аргумента
    // У функции есть свойство length - ожидаемое кол-во аргументов
    if (args.length >= func.length) {
      return func.apply(this, args); // возвращаем результат функции
    } else {
      // Если не все еще аргументы были переданы
      // То создадим новую функцию
      return function (...args2) {
        // Снова вызываем curried, конкатинируя аргументы двух функций
        // Тут главное понять как накапливаются аргументы в замыкании
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

const curriedLog = curry(log); // Волшебная функция каррирования

// Ух-ты мы создали новую функцию для логирования с текущим временем
let logNow = curriedLog(new Date());

logNow('INFO', 'message'); // теперь не нужно передавать аргумент времени
