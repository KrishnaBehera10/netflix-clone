import "./Home.css";
import NavBar from "../../Components/NavBar/Navbar";
import banner from "../../assets/Logo/hero_banner.jpg";
import hero_title from "../../assets/Logo/hero_title.png";
import play from "../../assets/Logo/play_icon.png";
import info from "../../assets/Logo/info_icon.png";
import TitleCart from "../../Components/TitleCart/TitleCart";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className="hero">
        <img src={banner} alt="banner" className="banner-image" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero" className="caption-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            nobis?
          </p>
          <div className="hero-button">
            <button className="btn">
              <img src={play} alt="play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="info" />
              info
            </button>
          </div>
          <TitleCart />
        </div>
      </div>
      <div className="more-card">
        <TitleCart title={"Blockbuster Movies"} category={"popular"} />
        <TitleCart title={"Only on Netflix"} category={"top_rated"} />
        <TitleCart title={"Upcoming"} category={"upcoming"} />
        <TitleCart title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
