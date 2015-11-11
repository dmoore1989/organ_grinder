var Recorder = React.createClass ({
  getInitialState: function () {
    return { isRecording: false, track: new Track() };
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.registerNotes);
  },

  componentWillUnmount: function () {
    KeyStore.removeChangeHandler(this.registerNotes);
  },

  registerNotes: function () {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },

  toggleRecord: function () {
    if (this.state.isRecording) {
      this.state.track.stopRecording();
      TrackStore.addTrack(this.state.track);
      this.setState({ isRecording: false, track: new Track() });
    } else {
      this.state.track.startRecording();
      this.setState({ isRecording: true });
    }
  },

  render: function () {
    var recording = this.state.isRecording ? "stopRecording" : "startRecording";
    return (
      <div>
        <button onClick={this.toggleRecord}>
          {recording}
        </button>
      </div>
    );
  }

});
