import "./styles.css";

import {ReactComponent as StarFull} from "assets/full-star.svg";
import {ReactComponent as StarHalf} from "assets/half-star.svg";
import {ReactComponent as StarEmpty} from "assets/empty-star.svg";

export function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
