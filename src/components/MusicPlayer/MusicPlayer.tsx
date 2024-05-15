import React from "react";
import ReactPlayer from "react-player";

const MusicPlayer = (): JSX.Element => {
  return (
    <React.Fragment>
      <div style={{ margin: "80px 0", textAlign: "center" }}>
        <h2>My Music Player</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
