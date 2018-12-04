import React from 'react';
import Song from './Song';

const SongList = (props) => {
  if(!props) return null;
  // debugger;
  const songs = props.songs.map((song, index) => {
    return <Song song={song} chartPosition={index+1} key={song.id.attributes["im:id"]} />
  })

  return(
    <div className="song-list">
    {songs}
    </div>
  )
}

export default SongList;
