import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/Netflix Logo/Netflix_Logo_RGB.png";
import { useEffect, useRef } from "react";
import { Logout } from "../Firebass/Firebass";
function Navbar() {
  const Navref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        Navref.current.classList.add("nav-dark");
      } else {
        Navref.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div className="NavBar" ref={Navref}>
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FiSearch className="icon" />
        <p>Children</p>
        <GoBell className="icon" />
        <div className="navbar-profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="profile"
          />
          <div>
            <FaCaretDown className="down-icon" />
          </div>
          <div className="dropdown">
            <p onClick={Logout}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
