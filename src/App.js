import StarRating from "./StarRating";
import "./App.css";
import { useState } from "react";

function App() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        maxRating={10}
        size={24}
        color="red"
        className="test" //define these class in the styles.css
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={2}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}

export default App;
