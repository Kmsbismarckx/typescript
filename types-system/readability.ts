// Не типизированная функция find()

declare function find(range: any, pred: any): any;

// Типизированная функция find()

declare function find<T>(range: T[], p: (elem: T) => boolean): T | undefined;
