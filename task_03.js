'use strict';

const checkCart = (count, total, promo) => {
  let result;
  promo = 'methed'.toLowerCase();

  if (count > 10 && count <= 20) {
    result = (total / 100) * 5;
    console.log(`Вам предоставляется скидка 5%: ${result}`);
  } else if (count > 20) {
    result = (total / 100) * 10;
    console.log(`Вам предоставляется скидка 10%: ${result}`);
  }

  if (total > 10000) {
    result = total - 1000;
    console.log(`Вам предоставляется скидка 1000: ${result}`);
  }

  if (promo === 'methed') {
    result = total - (result / 100) * 15;
    console.log(`Вам предоставляется скидка 15%: ${result}`);
  }
};

checkCart(21, 100000, 'METHED');
