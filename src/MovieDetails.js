import Action from "./Action";
import Comedy from "./Comedy";
import Horror from "./Horror";

import Romance from "./Romance";
import TopRated from "./TopRated";

function MovieDetails() {
  return (
    <div>
      <TopRated />
      <Action />
      <Comedy />
      <Horror />
      <Romance />
    </div>
  );
}

export default MovieDetails;
