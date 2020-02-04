import caesar13 from './caesar13';

const verify = (input, goal) => {
  if (input === goal) {
    console.log(`Gratulacje!`);
  } else if (input.name === 'String Error') {
    console.log(`${input}`);
  } else {
    console.log(`Niestety oczekiwano: ${goal}, otrzymano: ${input}`);
  }
};

verify(caesar13('PRZEPROGRAMOWANI'), 'CEMRCEBTENZBJNAV');
verify(caesar13('PRZ3EpROGRAmOWAnI'), 'CEM3RCEBTENZBJNAV');
verify(caesar13(''), false);
verify(caesar13(), false);
verify(caesar13(123), false);
