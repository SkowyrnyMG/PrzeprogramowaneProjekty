const caesar13 = string => {
  try {
    if (typeof string !== 'string' || string === '' || string === undefined) {
      const error = new Error(
        'Podana wartność musi być typu string oraz oraz posiadać przynajmniej 1 znak!'
      );
      error.name = 'String Error';
      throw error;
    }

    const stringArr = Array.from(string.toUpperCase());
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const NUMBERS = '1234567890';

    return stringArr.reduce((newStr, cur) => {
      const curIndex = alphabet.indexOf(cur);
      const JUMP_VALUE = 13;
      const rot13 = curIndex + JUMP_VALUE;
      if (NUMBERS.includes(cur)) {
        newStr += cur;
      } else {
        if (rot13 > 25) {
          const encryptedIndex = rot13 % JUMP_VALUE;
          newStr += alphabet[encryptedIndex];
        } else {
          const encryptedSign = alphabet[rot13];
          newStr += encryptedSign;
        }
      }
      return newStr;
    }, '');
  } catch (error) {
    return error;
  }
};

export default caesar13;
