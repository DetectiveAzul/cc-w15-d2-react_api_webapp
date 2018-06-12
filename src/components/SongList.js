import React from 'react';
import Song from '../components/Song.js'


const SongsList = (props) => {
  if (!props.songs) {
    return(<h3>Loading</h3>)
  }

  const songs = props.songs.map((song) => {
    return(<Song
      key={props.songs.indexOf(song)}
      order={props.songs.indexOf(song)}
      song={song}
     />)
  })

  return(
    <div className="songs-list">
      {songs}
    </div>
  );
};

export default SongsList;
