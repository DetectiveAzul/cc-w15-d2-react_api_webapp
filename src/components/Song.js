import React from 'react';

const Song = (props) => {
  const songObject = props.song;

  return(
    <div className="song">
      <img alt="song cover"
        src={songObject["im:image"][2]["label"]}
      />
      <h5>{props.order + 1}. {props.song["im:collection"]["im:name"]["label"]}</h5>
      <audio controls
        style={{width: 170}}
        src={props.song["link"][1]["attributes"]["href"]}
      />
    </div>
  );

};

export default Song;
