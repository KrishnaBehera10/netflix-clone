import "./TitleCart.css";
import data from "../../assets/Logo/cards/Cards_data";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function TitleCart({ title, category }) {
  const cardref = useRef();
  const [Apidata, setApidata] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjllNTRiMDNmMjg1OWNhMTVhNmJhNGY5M2JjYmEyMCIsIm5iZiI6MTczNTYzODEzMS4xNzcsInN1YiI6IjY3NzNiYzczNDNhMjE5ODJkYTEyZDFkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-Ki_lm8StfjtzcjrIBtvJmpy_N78lpEjDRSpDJ4wIM",
    },
  };
  function handlewheel(e) {
    e.preventDefault();
    cardref.current.scrollLeft += e.deltaY;
  }
  useEffect(() => {
    // cardref.current.addEventListener("wheel", handlewheel);

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApidata(res.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="title-cart">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cart-list">
        {Apidata.map((item, index) => {
          return (
            <Link
              className="card"
              key={index}
              ref={cardref}
              to={`player/${item.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt="poster"
              />
              <p>{item.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCart;
