#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
  .command(
    'current',
    'показать текущую дату и время',
    (yargs) =>
      yargs
        .option('year', {
          alias: 'y',
          type: 'boolean',
          description: 'Текущий год',
        })
        .option('month', {
          alias: 'm',
          type: 'boolean',
          description: 'Текущий месяц',
        })
        .option('date', {
          alias: 'd',
          type: 'boolean',
          description: 'Дата в календарном месяце',
        }),
    (argv) => {
      const date = new Date();
      if (argv.year) {
        console.log(date.getFullYear());
      }
      if (argv.month) {
        console.log(date.getMonth() + 1);
      }
      if (argv.date) {
        console.log(date.getDate());
      }
    },
  )
  .command(
    'add',
    'показать будущую дату',
    (yargs) =>
      yargs.option('day', {
        alias: 'd',
        type: 'number',
        description: 'Количество дней',
      }),
    (argv) => {
      const date = new Date();
      if (!argv.day) {
        console.log(date);
        return;
      }
      date.setDate(date.getDate() + argv.day);
      console.log(date);
    },
  )
  .command(
    'sub',
    'показать прошлую дату',
    (yargs) =>
      yargs.option('month', {
        alias: 'm',
        type: 'number',
        description: 'Количество месяцев',
      }),
    (argv) => {
      const date = new Date();
      if (!argv.month) {
        console.log(date);
        return;
      }
      date.setMonth(date.getMonth() - argv.month);
      console.log(date);
    },
  )
  .help().argv;
