const cards = [
  {
    name: 'Mastercard',
    numberLength: [16],
    keys: [51, 52, 53, 54, 55]
  },
  {
    name: 'Visa',
    numberLength: [13, 16],
    keys: [4]
  },
  {
    name: 'American Express',
    numberLength: [15],
    keys: [34, 37]
  }
];

const testNumber = number => {
  return cards.filter(cur => {
    let temporary;
    let cardName;

    cur.keys.forEach(key => {
      if (number.join('').startsWith(key)) temporary = cur;
    });

    cur.numberLength.forEach(num => {
      if (number.length === num) cardName = temporary;
    });
    if (cardName !== undefined) {
      return cardName;
    }
  });
};

const luhnaCheck = cardNumber => {
  const reversedNumber = cardNumber.reverse();
  const luhnaMultipy = reversedNumber.reduce(
    (luhnaMultiply, cur, index = 0) => {
      const LUHNA_MULTIPLIER = 2;
      if (index % 2 === 1) luhnaMultiply.push(cur * LUHNA_MULTIPLIER);
      return luhnaMultiply;
    },
    []
  );
  const splitMultiplyResult = luhnaMultipy.reduce((finnal, cur) => {
    finnal.push(cur.toString().split(''));
    return finnal;
  }, []);

  const multiplySum = splitMultiplyResult.flat().reduce((sum, cur) => {
    sum += Number(cur);
    return sum;
  }, 0);

  const totalSum = reversedNumber.reduce((total, cur, index) => {
    if (index % 2 === 0) total += Number(cur);
    return total;
  }, multiplySum);

  return totalSum % 10 === 0;
};

const checkCardNumber = cardNumber => {
  try {
    const numberArr = Array.from(cardNumber).filter(cur =>
      cur.match(/[1234567890]/)
    );

    let cardSuplier;
    if (testNumber(numberArr)[0] !== undefined) {
      cardSuplier = testNumber(numberArr)[0].name;
    } else cardSuplier = undefined;

    if (cardSuplier !== undefined && luhnaCheck(numberArr) === true) {
      return cardSuplier;
    }

    const e = new Error();
    e.name = 'Nieprawidłowy';
    throw e;
  } catch (e) {
    return e.name;
  }
};

export default checkCardNumber;
