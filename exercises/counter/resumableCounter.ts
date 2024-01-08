function* counterGenerator(): IterableIterator<number> {
  let n: number = 1;

  while (true) {
    console.log(n++);
    yield n;
  }
}

const counter: IterableIterator<number> = counterGenerator();
counter.next();
counter.next();
counter.next();
