// Не компонуемая система

function wrongFindFirstNegativeNumber(numbers: number[]): number | undefined {
  for (let i of numbers) {
    if (i < 0) {
      return i;
    }
  }
}
function wrongFindFirstOneCharacterString(
  strings: string[],
): string | undefined {
  for (let str of strings) {
    if (str.length == 1) {
      return str;
    }
  }
}

// Обновление не компонуемой системы

function findFirstNegativeNumber(numbers: number[]): number | undefined
  for (let i of numbers) {
    if (i < 0) {
      return i;
    }
  }

  console.error("No matching value found");
}
function findFirstOneCharacterString(strings: string[]): string | undefined {
  for (let str of strings) {
    if (str.length == 1) {
      return str;
    }
  }

  console.error("No matching value found");
}

// Компонуемая система

function first<T>(range: T[], p: (elem: T) => boolean): T | undefined {
  for (let elem of range) {
    if (p(elem)) {
      return elem;
    }
  }
}

function findFirstNegativeNumber(numbers: number[]): number | undefined {
  return first(numbers, (n) => n < 0);
}

function findFirstOneCharacterString(strings: string[]): string | undefined {
  return first(strings, (str) => str.length == 1);
}
