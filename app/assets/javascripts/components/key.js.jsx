var Key = React.createClass({
  getInitialState: function () {
    return { note: new Note(window.TONES[this.props.noteName]) };
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.keyChange);
  },

  componentWillUnmount: function () {
    KeyStore.removeChangeHandler(this.keyChange);
  },

  keyChange: function (event) {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
      this.state.note.start();
    } else {
      this.state.note.stop();
    }
  },

  render: function () {
    return (
      <div></div>
    );

  }

});
