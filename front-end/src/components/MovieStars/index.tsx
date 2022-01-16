import "./styles.css";

import { ReactComponent as StarFull } from "assets/full-star.svg";
import { ReactComponent as StarHalf } from "assets/half-star.svg";
import { ReactComponent as StarEmpty } from "assets/empty-star.svg";

type StarProps = {
  fill: number;
};

function Star({ fill }: StarProps) {
  if (fill === 0) {
    return <StarEmpty />;
  } else if (fill === 1) {
    return <StarFull />;
  } else {
    return <StarHalf />;
  }
}

function getFills(score: number) {
  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

type Props = {
  score: number;
};

export function MovieStars({ score }: Props) {
  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      {fills.map((value) => {
        return <Star fill={value} />;
      })}
    </div>
  );
}
