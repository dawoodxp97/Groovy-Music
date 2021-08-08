import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import "./styles/Home.css";
import Tracks from "./Tracks";
import axios from "./../axios";
import requests, {
  fPlaylistLink,
  fPlaylistLink2,
  frPlaylistLink,
  frPlaylistLink2,
  sPlaylistLink,
  sPlaylistLink2,
  tPlaylistLink,
  tPlaylistLink2,
} from "./Requests";

function Home() {
  const [trending, setTrending] = useState({});
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      if (isMounted) {
        const request = await axios.get(requests.fetchTrendingPlaylist);
        setTrending(request.data);

        return request;
      }
    }
    fetchData();
    return function cleanup() {
      isMounted = false;
    };
  }, []);
  return (
    <div className="home">
      <div className="sidebar_div">
        <Sidebar />
      </div>
      <div className="homepage">
        <div className="home_cards">
          <Link to={`/details/${fPlaylistLink}/${fPlaylistLink2}`}>
            <Wrap>
              <img
                src="https://shdbdecdnems02.cdnsrv.jio.com/c.saavncdn.com/editorial/MostSearchedSongsHindi_20210714171755.jpg?bch=1626310432"
                alt="img"
              />
            </Wrap>
          </Link>
          <Link to={`/details/${sPlaylistLink}/${sPlaylistLink2}`}>
            <Wrap>
              <img
                src="https://shdbdecdnems01.cdnsrv.jio.com/c.saavncdn.com/editorial/90sKeRemakes_20201225034901.jpg"
                alt="img"
              />
            </Wrap>
          </Link>
          <Link to={`/details/${tPlaylistLink}/${tPlaylistLink2}`}>
            <Wrap>
              <img
                src="https://shdbdecdnems05.cdnsrv.jio.com/c.saavncdn.com/editorial/IshqRemixed_20210719162339.jpg"
                alt="img"
              />
            </Wrap>
          </Link>
          <Link to={`/details/${frPlaylistLink}/${frPlaylistLink2}`}>
            <Wrap>
              <img
                src="https://shdbdecdnems06.cdnsrv.jio.com/c.saavncdn.com/editorial/AlluArjunStyle_20210312163555.jpg?bch=1620931947"
                alt="img"
              />
            </Wrap>
          </Link>
        </div>
        <div className="tracks_div">
          <h1>Tracks of the week</h1>
          <Tracks songs={trending.songs} />
        </div>
      </div>
    </div>
  );
}

export default Home;

const Wrap = styled.div`
  height: 20vw;
  width: 20vw;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: fill;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
