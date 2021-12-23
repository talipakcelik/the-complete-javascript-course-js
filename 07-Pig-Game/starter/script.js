'use strict';

/// Elementleri seçme
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/// Koşulları sağlama
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  // sayı 1 gelirse geçişten önceki oyuncunun skoru 0 olsun
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // diğer oyuncuya geçiş
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

/// Zar atma functionality'si
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. random zar atmayı hâlletme
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. zarı göster
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. 1 gelip gelmediği kontrol:
    if (dice !== 1) {
      // current score'a zarı ekle
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // current0El.textContent = currentScore;
    } else {
      // sayı 1 gelirse geçişten önceki oyuncunun skoru 0 olsun
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // diğer oyuncuya geçiş
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. current score'u active oyuncuya ekleme
    scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore; demek gibi
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. if oyuncunun skoru >= 100, kontrol et
    if (scores[activePlayer] >= 25) {
      // 2.1. oyunu bitir
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 2.2. diğer oyuncuya geç
      // else yani skor 100'e ulaşmamışsa diğer oyuncuya geç
      switchPlayer();
    }
  }
});
/***************************/
//////////el yapımı/////////
/***************************/

// diceEl.style.display = 'none';
