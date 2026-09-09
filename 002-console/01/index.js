#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const validateShiftArgs = require('./utils/validateShiftArgs');

yargs(hideBin(process.argv))
  .strict()
  .demandCommand(1)
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
        return;
      }

      if (argv.month) {
        console.log(date.getMonth() + 1);
        return;
      }

      if (argv.date) {
        console.log(date.getDate());
        return;
      }

      console.log(date.toISOString());
    },
  )
  .command(
    'add',
    'показать будущую дату',
    (yargs) =>
      yargs
        .option('day', {
          alias: 'd',
          type: 'number',
          description: 'Количество дней',
        })
        .option('month', {
          alias: 'm',
          type: 'number',
          description: 'Количество месяцев',
        })
        .option('year', {
          alias: 'y',
          type: 'number',
          description: 'Количество лет',
        })
        .check(validateShiftArgs),
    (argv) => {
      const date = new Date();

      if (argv.day !== undefined) {
        date.setDate(date.getDate() + argv.day);
      }

      if (argv.month !== undefined) {
        date.setMonth(date.getMonth() + argv.month);
      }

      if (argv.year !== undefined) {
        date.setFullYear(date.getFullYear() + argv.year);
      }

      console.log(date.toISOString());
    },
  )
  .command(
    'sub',
    'показать прошлую дату',
    (yargs) =>
      yargs
        .option('day', {
          alias: 'd',
          type: 'number',
          description: 'Количество дней',
        })
        .option('month', {
          alias: 'm',
          type: 'number',
          description: 'Количество месяцев',
        })
        .option('year', {
          alias: 'y',
          type: 'number',
          description: 'Количество лет',
        })
        .check(validateShiftArgs),
    (argv) => {
      const date = new Date();

      if (argv.day !== undefined) {
        date.setDate(date.getDate() - argv.day);
      }

      if (argv.month !== undefined) {
        date.setMonth(date.getMonth() - argv.month);
      }

      if (argv.year !== undefined) {
        date.setFullYear(date.getFullYear() - argv.year);
      }

      console.log(date.toISOString());
    },
  )
  .help().argv;
