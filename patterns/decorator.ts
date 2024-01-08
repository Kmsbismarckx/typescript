interface PrinterInterface {
  print(): void;
}

class Printer implements PrinterInterface {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  public print() {
    process.stdout.write(this.value);
  }
}

abstract class Decorator implements PrinterInterface {
  component: PrinterInterface;

  protected constructor(component: PrinterInterface) {
    this.component = component;
  }

  print(): void {
    this.component.print();
  }
}

class QuotesDecorator extends Decorator {
  constructor(component: PrinterInterface) {
    super(component);
  }

  print(): void {
    process.stdout.write('"');
    super.print();
    process.stdout.write('"');
  }
}

class LeftBracketDecorator extends Decorator {
  constructor(component: PrinterInterface) {
    super(component);
  }

  print(): void {
    process.stdout.write("[");
    super.print();
  }
}

class RightBracketDecorator extends Decorator {
  constructor(component: PrinterInterface) {
    super(component);
  }

  print(): void {
    super.print();
    process.stdout.write("]");
  }
}

const printer = new QuotesDecorator(
  new LeftBracketDecorator(new RightBracketDecorator(new Printer("Привет"))),
);
printer.print();
