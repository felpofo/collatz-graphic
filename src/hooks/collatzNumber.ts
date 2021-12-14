interface ICollatz {
  steps: number;
  initialNumber: number;
  collatz: number[];
}

export default function useCollatz(number: number) {
  function calculateCollatz(number: number): ICollatz {
    const initialNumber = number;
    let collatz = [number];
    let steps = 0;

    while (number != 1) {
      if (number % 2 === 0) number = number / 2;
      else number = number * 3 + 1;

      collatz.push(number);
      steps++;
    }

    return { steps, initialNumber, collatz };
  }

  return { collatzNumber, setCollatzNumber };
}
