import React from "react";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import "./styles/Login.css";
function Login() {
  const History = useHistory();
  const googleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result) {
          History.push("/homepage");
        }
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_grp">
        <div className="login_title">
          <h1>Groovy Music App</h1>
        </div>
        <div className="login_logo">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/boy-listening-music-2527775-2114678.png"
            alt=""
          />
        </div>
        <div onClick={googleAuth} className="login_btn">
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
