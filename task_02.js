'use strict';

let names;

while ((names = prompt('Имя студента'))) {
  if (names === null) {
    break;
  }

  console.log(`${names}.`);
}
