const OPTIONS = ['day', 'month', 'year'];

function validateShiftArgs(argv) {
  if (
    argv.day === undefined &&
    argv.month === undefined &&
    argv.year === undefined
  ) {
    throw new Error(
      'Необходимо указать хотя бы один параметр: --day, --month или --year',
    );
  }

  OPTIONS.forEach((option) => {
    if (argv[option] !== undefined && Number.isNaN(argv[option])) {
      throw new Error('Параметры --day, --month и --year должны быть числами');
    }
  });

  return true;
}

module.exports = validateShiftArgs;
