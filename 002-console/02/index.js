#!/usr/bin/env node

const readline = require('readline');

const min = 0;
const max = 100;

const secretValue = Math.floor(Math.random() * (max - min + 1)) + min;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Загадано число в диапазоне от ${min} до ${max}`);

rl.on('line', (input) => {
  console.log('input', input);
  if (isNaN(Number(input))) {
    console.log('Введите число');
    return;
  }

  const inputValue = Number(input);

  if (inputValue < secretValue) {
    console.log('Больше');
  }

  if (inputValue > secretValue) {
    console.log('Меньше');
  }

  if (inputValue === secretValue) {
    console.log(`Отгадано число ${secretValue}!`);
    rl.close();
  }
});
