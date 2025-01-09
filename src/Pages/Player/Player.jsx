import "./Player.css";
import back_icon from "../../assets/Logo/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Player() {
  const [Apidata, setApidata] = useState({});
  const Navigation = useNavigate();
  const { id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjllNTRiMDNmMjg1OWNhMTVhNmJhNGY5M2JjYmEyMCIsIm5iZiI6MTczNTYzODEzMS4xNzcsInN1YiI6IjY3NzNiYzczNDNhMjE5ODJkYTEyZDFkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-Ki_lm8StfjtzcjrIBtvJmpy_N78lpEjDRSpDJ4wIM",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApidata(res.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="player">
      <img src={back_icon} alt="back" onClick={() => Navigation("/")} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${Apidata.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{Apidata.published_at}</p>
        <p>{Apidata.name}</p>
        <p>{Apidata.type}</p>
      </div>
    </div>
  );
}

export default Player;
