import React from "react";
import { API_KEY, imageUrl } from "./API";
import "./App.css";
import Axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Action() {
  const [originalsData, setOriginalsData] = React.useState([]);
  const [myId, setMyId] = React.useState("");
  React.useEffect(function () {
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28
      `
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
        {
          setMyId(new URLSearchParams(new URL(output).search).get("v"));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <h2 style={{ color: "white", marginLeft: "25px" }}> Actions</h2>
      <div className="allImages">
        {originalsData.map(function (info) {
          // console.log(imageUrl + info.poster_path);
          return (
            <img
              className="imagesgap"
              width="250px"
              height="250px"
              src={imageUrl + info.poster_path}
              alt=""
              onClick={() => {
                handleCLick(info);
              }}
            />
          );
        })}
      </div>
      {myId ? <Youtube videoId={myId} className="ytcenter" /> : null}
    </div>
  );
}
export default Action;
