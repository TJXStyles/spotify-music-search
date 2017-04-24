import React, {Component} from 'react';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="App-title">Music Master</div>
          <input placeholder="Search for an artist"/>
          <button>Submit</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }

}

export default App;