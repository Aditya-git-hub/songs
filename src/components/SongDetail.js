import React from "react";

import { useSelector } from "react-redux";

const SongDetails = () => {
  const song = useSelector((state) => state.selectedSong);
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

export default SongDetails;

