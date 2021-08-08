import React from "react";

import { useStateValue } from "../context/StateProvider";
import "./styles/Footer.css";
import AudioPlayer from "react-h5-audio-player";
import { AiOutlineCloudDownload } from "react-icons/ai";
function Footer() {
  const [{ track }] = useStateValue();

  return (
    <div className="footer">
      <AudioPlayer
        autoPlay
        src={track}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
      <a href={track} download="filename.mp3">
        <AiOutlineCloudDownload />
      </a>
    </div>
  );
}

export default Footer;
