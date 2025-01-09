import "./Login.css";
import Logo from "../../assets/Netflix.png";
import { useState } from "react";
import { SignUp, login } from "../../Components/Firebass/Firebass";
import spinner from "../../assets/Logo/netflix_spinner.gif";
function Login() {
  const [IsSign, setIsSign] = useState("Sign In");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (IsSign === "Sign In") {
      await login(Email, Password);
    } else {
      await SignUp(Name, Email, Password);
    }
    setLoading(false);
  };
  return Loading ? (
    <div className="loading">
      <img src={spinner} alt="loading...." />
    </div>
  ) : (
    <div className="login">
      <img src={Logo} alt="icon" className="login-logo" />
      <div className="login-form">
        <h1>{IsSign}</h1>
        <form>
          {IsSign === "Sign Up" ? (
            <input
              type="text"
              placeholder="You Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={user_auth} type="submit">
            {IsSign}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {IsSign === "Sign In" ? (
            <p>
              New to Netflix ?{" "}
              <span onClick={() => setIsSign("Sign Up")}>Sign Up </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsSign("Sign In")}>Sign in </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
