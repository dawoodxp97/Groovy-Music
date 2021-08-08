import React from "react";
import "./styles/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import AlbumIcon from "@material-ui/icons/Album";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router-dom";
function Sidebar() {
  const History = useHistory();
  const handleHomeClick = () => {
    History.replace("/homepage");
  };
  return (
    <div className="sidebar">
      <div onClick={handleHomeClick}>
        <HomeIcon />
        <p>Home</p>
      </div>
      <div>
        <FavoriteIcon />
        <p>Favorites</p>
      </div>
      <div>
        <TrackChangesIcon />
        <p>Podcast</p>
      </div>
      <div>
        <AlbumIcon />
        <p>Albums</p>
      </div>
      <div>
        <SettingsIcon />
        <p>Settings</p>
      </div>
      <div>
        <MoreHorizIcon />
        <p>More</p>
      </div>
    </div>
  );
}

export default Sidebar;
