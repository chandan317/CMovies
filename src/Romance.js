import Axios from "axios";
import React from "react";
import "./App.css";
import { API_KEY, imageUrl } from "./API";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
function Romance() {
  const [originalsData, setOriginalsData] = React.useState([]);
  const [myId, setMyId] = React.useState("");
  React.useEffect(function () {
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
    )
      .then(function (output) {
        setOriginalsData(output.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function handleCLick(movieData) {
    const movieName = movieData.title;
    movieTrailer(movieName)
      .then(function (output) {
        setMyId(new URLSearchParams(new URL(output).search).get("v"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <h2 style={{ color: "white", marginLeft: "25px" }}>Romance</h2>
      <div className="allImages">
        {originalsData.map(function (info) {
          return (
            <img
              className="imagesgap"
              src={imageUrl + info.poster_path}
              alt=""
              width="250px"
              height="250px"
              onClick={() => {
                handleCLick(info);
              }}
            />
          );
          // console.log(imageUrl+info.poster_path);
        })}
      </div>
      {myId ? <Youtube videoId={myId} className="ytcenter" /> : null}
    </div>
  );
}
export default Romance;
