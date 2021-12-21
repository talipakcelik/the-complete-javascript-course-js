'use strict';

console.log(document.querySelector('.message').textContent);
///
document.querySelector('.message').textContent = '🎉 Doğru Sayı ';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
///
document.querySelector('.guess').value = 99;
console.log(document.querySelector('.guess').value);
