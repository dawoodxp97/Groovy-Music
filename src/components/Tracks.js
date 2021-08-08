import React from "react";
import "./styles/Tracks.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HeadsetIcon from "@material-ui/icons/Headset";
import { useStateValue } from "../context/StateProvider";
function Tracks({ songs }) {
  const [, dispatch] = useStateValue();
  return (
    <div className="tracks">
      {songs &&
        songs.map((song, key) => (
          <div key={song.id} className="track">
            <div className="track_img">
              <img src={song.image} alt={song.song} />
            </div>
            <div className="track_info">
              <p>{song.song}</p>
              <p className="singers">{song.singers}</p>
            </div>
            <div className="track_ext">
              <HeadsetIcon />
              <p>{song.play_count}</p>
            </div>
            <div className="track_play">
              <div>
                <FavoriteIcon />
                <div
                  onClick={(e) =>
                    dispatch({
                      type: "SET_TRACK",
                      track: song.media_url,
                    })
                  }
                  className="track_play_btn"
                >
                  <PlayArrowIcon />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Tracks;
