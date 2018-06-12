import React, {Component} from 'react';
import SongsList from '../components/SongList.js';
import './SongsContainer.css';

class SongsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  };

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res =>  res.json() )
    .then(songsData => this.setState({songs: songsData.feed.entry }))
    .catch(error => console.log('Error:', error));
  };


  render() {
    return (
      <div className="songs-container">
        <h1 className="title">UK Top 20</h1>
        <SongsList songs={this.state.songs} />
      </div>
    );
  };

};

export default SongsContainer;
