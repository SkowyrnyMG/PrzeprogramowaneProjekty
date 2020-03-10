import './styles.scss';

const rodoAgreement = document.getElementById('rodo-agreement');
const rodoCheck = document.querySelectorAll('.line');

const listenersManager = () => {
  rodoAgreement.addEventListener('change', () => {
    rodoCheck.forEach(part => {
      part.classList.toggle('active-opacity');
    });
  });
};

listenersManager();
