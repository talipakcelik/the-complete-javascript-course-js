'use strict';

// console.log(document.querySelector('.message').textContent);
// ///
// document.querySelector('.message').textContent = '🎉 Doğru Sayı ';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// ///
// document.querySelector('.guess').value = 99;

/////073 Handling Click Events

const secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc(Math.random() * 21) neden olmasın.
document.querySelector('.number').textContent = secretNumber;

let score = 20; // başlangıç değeri
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ Sayı girilmedi';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Doğru Sayı ';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Çok yüksek ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💥 Oyunu kaybettiniz ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Çok düşük ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 💥 Oyunu kaybettiniz ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
