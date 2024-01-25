type TransformFunction = (value: number) => number;

function identity<T>(value: T): T {
  return value;
}
function getNumbers(transform: TransformFunction = identity): number[] {}

class Widget {}
class AssembledWidget {}

type PluckFunction = (widgets: Widget[]) => Widget[];

function assembledWidgets(pluck: PluckFunction = identity): AssembledWidget[] {}

class Optional<T> {
  private value: T | undefined;
  private assigned: boolean;

  constructor(value?: T) {
    if (value) {
      this.value = value;
      this.assigned = true;
    } else {
      this.value = undefined;
      this.assigned = false;
    }
  }

  public hasValue(): boolean {
    return this.assigned;
  }

  public getValue(): T {
    if (!this.assigned) {
      throw Error();
    }

    return <T>this.value;
  }
}
