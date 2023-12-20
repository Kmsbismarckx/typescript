// Недостаточная инкапсуляция

class WrongSafeDivisor {
  divisor: number = 1;

  setDivisor(value: number) {
    if (value == 0) {
      throw new Error("Value should not be 0");
    }
    this.divisor = value;
  }

  divide(x: number): number {
    return x / this.divisor;
  }
}

function wrongExploit(): number {
  let sd = new WrongSafeDivisor();

  sd.divisor = 0;

  return sd.divide(42);
}

// Инкапсуляция

class SafeDivisor {
  private divisor: number = 1;

  setDivisor(value: number) {
    if (value == 0) {
      throw new Error("Value should not be 0");
    }
    this.divisor = value;
  }

  divide(x: number): number {
    return x / this.divisor;
  }
}

function exploit(): number {
  let sd = new SafeDivisor();

  sd.divisor = 0;

  return sd.divide(42);
}
