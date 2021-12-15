'use strict';
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const sicaklikHesapla = function (sicak) {
  let max = sicak[0];
  let min = sicak[0];
  for (let i = 0; i < sicak.length; i++) {
    if (typeof sicak[i] !== 'number') continue;

    if (sicak[i] > max) max = sicak[i];
    if (sicak[i] < min) min = sicak[i];
  }
  console.log(max, min);
  return max - min;
};

const sicaklikFarki = sicaklikHesapla(temperatures);
console.log(sicaklikFarki);

const sicaklikHesaplaYeni = function (sicak1, sicak2) {
  const sicak = sicak1.concat(sicak2);
  console.log(sicak);

  let max = sicak[0];
  let min = sicak[0];
  for (let i = 0; i < sicak.length; i++) {
    if (typeof sicak[i] !== 'number') continue;

    if (sicak[i] > max) max = sicak[i];
    if (sicak[i] < min) min = sicak[i];
  }
  console.log(max, min);
  return max - min;
};

const sicaklikFarkiYeni = sicaklikHesaplaYeni([1, 5, 5], [9, 7, 2]);
console.log(sicaklikFarkiYeni);
