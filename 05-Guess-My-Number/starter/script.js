'use strict';

// console.log(document.querySelector('.message').textContent);
// ///
// document.querySelector('.message').textContent = '🎉 Doğru Sayı ';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// ///
// document.querySelector('.guess').value = 99;

/////073 Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc(Math.random() * 21) neden olmasın.

let score = 20; // başlangıç değeri
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  /// tahmin yapılmadığı zaman
  if (!guess) {
    displayMessage('❌ Sayı girilmedi');
    // document.querySelector('.message').textContent = '❌ Sayı girilmedi';
    /// oyuncu kazandığı zaman
  } else if (guess === secretNumber) {
    displayMessage('🎉 Doğru Sayı');
    // document.querySelector('.message').textContent = '🎉 Doğru Sayı ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    ///
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    /// tahmin tutmadığı zaman
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Çok yüksek ' : '📉 Çok düşük ';
      displayMessage(guess > secretNumber ? '📈 Çok yüksek ' : '📉 Çok düşük ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Oyunu kaybettiniz ');
      // document.querySelector('.message').textContent = ' 💥 Oyunu kaybettiniz ';
      document.querySelector('.score').textContent = 0;
    }
  }
  /// tahmin yüksek olduğu zaman
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Çok yüksek ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 💥 Oyunu kaybettiniz ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   /// tahmin düşük olduğu zaman
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Çok düşük ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' 💥 Oyunu kaybettiniz ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
