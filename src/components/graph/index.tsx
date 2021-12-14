import "./styles.scss";

interface GraphProps {
  collatzConjecture: {
    steps: number;
    initialNumber: number;
    collatz: [number, number];
  };
}

export default function Graph({ collatzConjecture }: GraphProps) {
  return (
    <div className="Graph">
      <div className="Graph__container">
        <div className="Graph__container__title">
          <h1>Collatz Conjecture</h1>
        </div>
        <div className="Graph__container__graph">
          <div className="Graph__container__graph__steps">
            <h2>{collatzConjecture.steps}</h2>
            <h3>Steps</h3>
          </div>
          <div className="Graph__container__graph__initialNumber">
            <h2>{collatzConjecture.initialNumber}</h2>
            <h3>Initial Number</h3>
          </div>
          <div className="Graph__container__graph__collatz">
            <h2>{collatzConjecture.collatz}</h2>
            <h3>Collatz</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
