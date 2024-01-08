// Function

type Counter = () => void;

function makeCounter(): Counter {
  let n: number = 1;

  return () => console.log(n++);
}

let counter: Counter = makeCounter();
counter();
counter();
counter();
