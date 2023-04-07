'use strict';

const result = [];
let names;

while ((names = prompt('Имя студента'))) {
  result.push(names);
  if (names === null) {
    break;
  }

  console.log(names);
}

console.log(`${result}.`);
