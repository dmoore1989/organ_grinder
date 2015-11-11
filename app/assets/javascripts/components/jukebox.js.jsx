Jukebox = React.createClass({
  getInitialState: function () {
    return { tracks: TrackStore.all() };
  },

  componentDidMount: function () {
    TrackStore.addChangeHandler(this.tracksChange);
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeHandler(this.tracksChange);
  },

  tracksChange: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  render: function () {
    return(
      <ol>
        {
          this.state.tracks.map(function(track){
            return < TrackPlayer track={track} />;
          })
        }
      </ol>
    );
  }

});

TrackPlayer = React.createClass({

  playTrack: function () {
    this.props.track.play();
  },

  deleteTrack: function () {
    TrackStore.deleteTrack(this.props.track);
  },

  render: function () {
      return ( <li>
                <h2>{this.props.track.notes}</h2>
                <button onClick={this.playTrack}>Play</button>
                <button onClick={this.deleteTrack}>Delete</button>
              </li>
          );
  },
});
