import createGame from './PostFunction.js';
import scoreBox from './scoreBox.js';

const form = document.querySelector('form');
const userName = document.getElementById('name-input');
const userScore = document.getElementById('score-input');
const refresh = document.querySelector('.refresh');

function postActivator() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createGame(userName.value, userScore.value);
    form.reset();
  });
}

function getActivator() {
  refresh.addEventListener('click', async () => {
    await scoreBox();
  });
}

export { postActivator, getActivator };