'use strict';

const personalData = (firstName, age) => {
  firstName = prompt('Напишите ваше имя?');
  age = +prompt('Сколько Вам лет?');

  if (age < 20) {
    alert(`Привет, ${firstName}!`);
  } else if (age >= 20 && age < 45) {
    alert(`Здравствуй, ${firstName}!`);
  } else {
    alert(`Здравствуйте, ${firstName}!`);
  }
};

personalData();
