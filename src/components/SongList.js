import React from 'react';
import Song from './Song';
import './SongList.css';

const SongList = (props) => {
  if(!props) return null;
  // debugger;
  const songs = props.songs.map((song, index) => {
    return <Song song={song} chartPosition={index+1} key={song.id.attributes["im:id"]} />
  })

  return(
    <table className="song-list">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Image</th>
          <th>Title</th>
          <th>Artist</th>
        </tr>
      </thead>
      <tbody>{songs}</tbody>
    </table>
  )
}

export default SongList;

// return(
//   <div className="song-list">
//   {songs}
//   </div>
// )
