const scoreBox = () => {
  const scoreBoard = document.getElementById('score-board');
  const scoreBoxWrapper = document.createElement('section');
  scoreBoxWrapper.classList.add('score-box');
  scoreBoxWrapper.innerHTML = `
      <div class="block" id="1"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="2"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="3"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="4"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="5"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="6"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="7"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="8"><p class="name">Wasiu:</p><p class="score">100</p></div>
      <div class="block" id="9"><p class="name">Wasiu:</p><p class="score">100</p></div>`;
  scoreBoard.appendChild(scoreBoxWrapper);
};
module.exports = scoreBox;