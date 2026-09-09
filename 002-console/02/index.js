#!/usr/bin/env node

const readline = require('readline');

const min = 0;
const max = 100;

const secretValue = Math.floor(Math.random() * (max - min + 1)) + min;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('SIGINT', () => {
  console.log('\n Выход');
  rl.close();
});

console.log(`Загадано число в диапазоне от ${min} до ${max}`);

function ask() {
  rl.question('', (input) => {
    if (input.trim() === '' || isNaN(Number(input))) {
      console.log('Введите число');
      ask();
      return;
    }

    const inputValue = Number(input);

    if (inputValue < min || inputValue > max) {
      console.log(`Число должно быть в диапазоне от ${min} до ${max}`);
      ask();
      return;
    }

    if (inputValue < secretValue) {
      console.log('Больше');
      ask();
      return;
    }

    if (inputValue > secretValue) {
      console.log('Меньше');
      ask();
      return;
    }

    console.log(`Отгадано число ${secretValue}!`);
    rl.close();
  });
}

ask();
