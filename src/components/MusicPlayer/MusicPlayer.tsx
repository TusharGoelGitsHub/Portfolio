import React from "react";
import ReactPlayer from "react-player";
import { musicContainerStyles, playerStyles } from "./MusicPlayer.styles";

const MusicPlayer = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className={musicContainerStyles}>
        <h2>My Music Player</h2>
        <div className={playerStyles}>
          <ReactPlayer
            url="bensound-memories.mp3"
            playing={false}
            controls={true}
            width="80%"
            height="50px"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MusicPlayer;
