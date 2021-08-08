import React from "react";
import "./styles/Header.css";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import TuneIcon from "@material-ui/icons/Tune";
import { useStateValue } from "../context/StateProvider";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
function Header() {
  const [{ user }] = useStateValue();
  const History = useHistory();
  const handleSignOut = () => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        auth.signOut();
        History.push("/");
      }
    });
  };
  return (
    <div className="header">
      <div className="header_img">
        <div>
          <MusicNoteIcon />
        </div>
      </div>
      <div className="header_search">
        <div className="search">
          <RadioButtonUncheckedIcon />
          <form>
            <input className="search_inp" type="text" placeholder="Search..." />
          </form>
          <div>
            <TuneIcon />
            <p>Filter</p>
          </div>
        </div>
      </div>
      <div className="header_user">
        {!user?.photoURL ? (
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"
            alt=""
          ></img>
        ) : (
          <img src={user?.photoURL} alt=""></img>
        )}
        <div onClick={handleSignOut}>
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
