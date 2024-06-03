import React from "react";
import { API_KEY, imageUrl } from "./API";
import "./App.css";
import Axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function TopRated() {
  const [originalsData, setOriginalsData] = React.useState([]);
  const [myId, setMyId] = React.useState("");
  React.useEffect(function () {
    Axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${API_KEY}
      `
    )
      .then(function (output) {
        setOriginalsData(output.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function handleClick(movieData) {
    const movieName = movieData.title;
    // console.log(movieName);
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
      <h2 style={{ color: "white", marginLeft: "25px" }}> TOP RATED</h2>
      <div className="allImages">
        {originalsData.map(function (info) {
          // console.log(info);
          // console.log(imageUrl + info.poster_path);
          return (
            <img
              className="imagesgap"
              width="250px"
              height="250px"
              src={imageUrl + info.poster_path}
              alt=""
              onClick={() => {
                handleClick(info);
              }}
            />
          );
        })}
      </div>
      {myId ? <Youtube videoId={myId} className="ytcenter" /> : null}
    </div>
  );
  //https://www.youtube.com/watch?v=PZvXoREcjKk&list=RDSg8cO2lSDjw&index=2&ab_channel=AnandAudio
}

export default TopRated;
