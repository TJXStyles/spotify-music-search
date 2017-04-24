import React, {Component} from 'react';
import './App.css';

class Profile extends Component {

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  render() {
    let artist = {
      name: '', 
      followers: {total: ''}, 
      images: [{url: ''}], 
      genres: []
    };
     artist = this.props.artist !== null ? this.props.artist : artist;

    return (
      <div className="profile">
        <img className="profile-img"
          src={artist.images[0].url}
        />

        <div className="profile-info">
          <div className="profile-name">Artist: { artist.name }</div>
          <div className="profile-followers">Followers: {this.numberWithCommas(artist.followers.total) }</div>
          <div className="profile-genres">Genre(s):
            {
              artist.genres.map((genre, k) => {
                genre = genre !== artist.genres[artist.genres.length -1 ] 
                              ? ` ${genre},` 
                              : `& ${genre}`
                return (
                  <span key={k}> {genre}</span>
                )
              })
            }
          </div>

        </div>
       
      </div>
    )
  }

}

export default Profile;