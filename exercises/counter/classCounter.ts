// Class

class ClassCounter {
  private n: number = 1;

  next(): void {
    console.log(this.n++);
  }
}

const counter = new ClassCounter();
counter.next();
counter.next();
counter.next();
