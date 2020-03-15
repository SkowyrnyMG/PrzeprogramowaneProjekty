import './styles.css';
import * as inputRules from './verifyForm';

const rodoAgreement = document.getElementById('rodo-agreement');
const rodoCheck = document.querySelectorAll('.line');
const allInputs = document.querySelectorAll('form input:not([type="checkbox"])');
const submit = document.querySelector('.submit');
const popup = document.querySelector('.popup');

const nameInput = document.getElementById('name-input');
const nameInputInfo = document.querySelector('.name .info');
const emailInput = document.getElementById('email-input');
const emailInputInfo = document.querySelector('.email .info');
const passwordInput = document.getElementById('password-input');
const passwordInputInfo = document.querySelector('.password .info');
const confirmInput = document.getElementById('password-input-confirm');
const confirmInputInfo = document.querySelector('.password-confirm .info');

// Be careful if you would like to add more verification rules you have to keep the same order in failMsg and rules!
const formActionsDatabase = {
  name: {
    failMsg: ['Name should be at least 2 signs long!', 'You cannot use special signs in Name!'],
    rules: [inputRules.verifyNameLength, inputRules.verifyInNameSigns]
  },
  email: {
    failMsg: ['Your emain does not have domain!', 'Email should include @ sign!'],
    rules: [inputRules.emailHasDomain, inputRules.ifEmail]
  },
  password: {
    failMsg: [
      'Password should include at least one number!',
      'Password should include at least one special sign!',
      'Password should include at least one uppercase letter!',
      'Password should be at least 8 signs long!'
    ],
    rules: [
      inputRules.ifPasswordHasNumber,
      inputRules.verifyInPasswordSigns,
      inputRules.ifPasswordUpperCase,
      inputRules.checkPasswordLength
    ]
  },
  confirm: {
    failMsg: ['Given passwords do not match!'],
    rules: [inputRules.verifyConfirm]
  }
};

const listenersManager = () => {
  rodoAgreement.addEventListener('change', () => {
    rodoCheck.forEach(part => {
      part.classList.toggle('active-opacity');
    });
  });

  submit.addEventListener('click', preventEmpty);
};

const preventEmpty = e => {
  const ifEmpty = [...allInputs].map(input => {
    if (input.value === '') {
      return false;
    } else {
      return true;
    }
  });

  if (
    nameStatus === false ||
    emailStatus === false ||
    passwordStatus === false ||
    confirmStatus === false ||
    ifEmpty.includes(false)
  ) {
    e.preventDefault();
    popupDisplay();
    return;
  }
};

const popupDisplay = () => {
  popup.classList.add('popup-active');
  setTimeout(() => {
    popup.classList.remove('popup-active');
  }, 2000);
};

const changeInputColors = (input, info, color) => {
  input.style.borderColor = color;
  info.style.color = color;
};

const nameController = (dataBase, infoBox, inputValue, secondInputValue) => {
  const defaultInfo = inputValue.placeholder;
  const rules = dataBase.rules;
  const failMsg = dataBase.failMsg;
  const rulesStatus = [];
  let inputStatus = false;
  const FAIL_COLOR = '#F93822';
  const SUCCES_COLOR = '#03AC13';

  rules.forEach((rule, index) => {
    rulesStatus.push(secondInputValue ? rule(inputValue.value, secondInputValue.value) : rule(inputValue.value));
    if ((secondInputValue ? rule(inputValue.value, secondInputValue.value) : rule(inputValue.value)) === false) {
      infoBox.innerHTML = failMsg[index];
      changeInputColors(inputValue, infoBox, FAIL_COLOR);
    } else {
    }
    if (!rulesStatus.includes(false)) {
      infoBox.innerHTML = defaultInfo;
      changeInputColors(inputValue, infoBox, SUCCES_COLOR);
      inputStatus = true;
    } else {
      inputStatus = false;
    }
  });
  console.log(inputStatus);
  return inputStatus;
};

let nameStatus = false;
nameInput.addEventListener('keyup', () => {
  nameStatus = nameController(formActionsDatabase.name, nameInputInfo, nameInput);
});
let emailStatus = false;
emailInput.addEventListener('keyup', () => {
  emailStatus = nameController(formActionsDatabase.email, emailInputInfo, emailInput);
});
let passwordStatus = false;
passwordInput.addEventListener('keyup', () => {
  passwordStatus = nameController(formActionsDatabase.password, passwordInputInfo, passwordInput);
});
let confirmStatus = false;
confirmInput.addEventListener('keyup', () => {
  confirmStatus = nameController(formActionsDatabase.confirm, confirmInputInfo, confirmInput, passwordInput);
});

listenersManager();
