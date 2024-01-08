class StrategyClient {
  strategy: Sorting | undefined = undefined;

  public setStrategy(strategy: Sorting) {
    this.strategy = strategy;
  }

  public executeStrategy(arr: number[]) {
    this.strategy?.sort(arr);
  }
}

interface Sorting {
  sort(arr: number[]): void;
}

class BubbleSort implements Sorting {
  public sort(arr: number[]) {
    console.log("Сортировка пузырьком");
    console.log("До: ", arr);

    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    console.log("После: ", arr);
  }
}

class SelectionSort implements Sorting {
  public sort(arr: number[]) {
    console.log("Сортировка выборками");
    console.log("До: ", arr);

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          let tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
        }
      }
    }

    console.log("После: ", arr);
  }
}

class InsertingSort implements Sorting {
  public sort(arr: number[]) {
    console.log("Сортировка вставками");
    console.log("До: ", arr);

    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j = i;
      while (j > 0 && arr[j - 1] > current) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = current;
    }

    console.log("После: ", arr);
  }
}

const client = new StrategyClient();

const arr0 = [1, 3, 2, 1];
client.setStrategy(new SelectionSort());
client.executeStrategy(arr0);

const arr1 = [11, 4, 2, 7, 8, 54];
client.setStrategy(new InsertingSort());
client.executeStrategy(arr1);

const arr2 = [3, -8, 2, 0, 33, 1, 3, 2];
client.setStrategy(new BubbleSort());
client.executeStrategy(arr2);
