import checkCardNumber from './checkcard';

const paypalTable = [
  '378282246310005',
  '371449635398431',
  '378734493671000',
  '30569309025904',
  '6011111111111117',
  '6011000990139424',
  '3530111333300000',
  '3566002020360505',
  '2221000000000009',
  '2223000048400011',
  '2223016768739313',
  '5555555555554444',
  '5105105105105100',
  '4111111111111111',
  '4012888888881881',
  '4222222222222'
];

const verify = (input, wrongValue) => {
  if (input !== wrongValue) {
    console.log(`Karta ma poprawny numer. Wydał ją ${input}.`);
  } else {
    console.log(`Numer karty jest ${input}.`);
  }
};

paypalTable.forEach(paypalCardNumber =>
  verify(checkCardNumber(paypalCardNumber), 'Nieprawidłowy')
);
