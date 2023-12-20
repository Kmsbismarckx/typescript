// Плохое изменение значения

function wrongSafeDivide(): number {
  let x: number = 42;

  if (x == 0) {
    throw new Error("x should not be 0");
  }

  x = x - 42;

  return 42 / x;
}

// Неизменяемость

function safeDivide(): number {
  const x: number = 42;

  if (x == 0) {
    throw new Error("x should not be 0");
  }

  x = x - 42;

  return 42 / x;
}
