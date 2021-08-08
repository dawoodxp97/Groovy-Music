import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./styles/Details.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HeadsetIcon from "@material-ui/icons/Headset";
import { useParams } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import axios from "./../axios";

function Details() {
  const [, dispatch] = useStateValue();
  const [data, setData] = useState({});
  const { link, link2 } = useParams();
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      if (isMounted) {
        const request = await axios.get(
          `/playlist/?query=https://www.jiosaavn.com/featured/${link}/${link2}&lyrics=true`
        );
        setData(request.data);
        return request;
      }
    }
    fetchData();
    return function cleanup() {
      isMounted = false;
    };
  }, [link, link2]);

  return (
    <div className="details">
      <div className="sidebar_div">
        <Sidebar />
      </div>
      <div className="songpage">
        <div className="tracks">
          {data.songs &&
            data.songs.map((song, key) => (
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
      </div>
    </div>
  );
}

export default Details;
