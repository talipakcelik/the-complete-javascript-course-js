'use strict';

console.log(document.querySelector('.message').textContent);
///
document.querySelector('.message').textContent = '🎉 Doğru Sayı ';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
///
document.querySelector('.guess').value = 99;

/////073 Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ Sayı girilmedi';
  }
});
