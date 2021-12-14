import { ReactNode } from 'react';

import "./styles.scss";

interface GraphProps {
  collatzConjecture?: number[];
}

export default function Graph({ collatzConjecture }: GraphProps) {
  return (
    <h1 className="graph">gadfgadf {collatzConjecture ?? 0}</h1>
  );
}
