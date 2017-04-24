import React, {Component} from 'react';
import './App.css';

class Gallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playingUrl: '',
      audio: null,
      playing: false
    }
  }

  playAudio(previewUrl) {
    /* 3 playing scenarios:
        1. Current track is clicked for the first time (Will play) X
        2. Current track is paused (Will pause current track) X
        3. Another track is clicked (Will pause current track and play new track)
    */

    let audio = new Audio(previewUrl)
    if (!this.state.playing ) {
      audio.play();
      this.setState({
        playing: true, //Prevents playing again when already playing
        playingUrl: previewUrl,
        audio
      })
    } else {
      if (this.state.playingUrl === previewUrl ) { // Pauses the current track if clicked
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      }
    }
  }
  
  render() {
    console.log('gallery props', this.props)
    const {tracks} = this.props;
    return (
      <div>
        {tracks.map((track, k) => {
          console.log('track', track);
          const trackImg = track.album.images[0].url;
          return (
            <div
              key={k}
              className="track"
              onClick={() => this.playAudio(track.preview_url)}
            >
              <img 
                src={trackImg}
                className="track-img"
                alt="track"
              />
              <p className="track-text">
                {track.name}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;