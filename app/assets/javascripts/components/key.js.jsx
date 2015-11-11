var Key = React.createClass({
  componentDidMount: function () {
    KeyStore.addChangeHandler(this.keyChange);
    this.note = new Note(window.TONES[this.props.noteName]);
  },

  componentWillUnmount: function () {
    KeyStore.removeChangeHandler(this.keyChange);
  },

  keyPress: function () {
    this.note.start();
  },

  keyRelease: function () {
    this.note.stop();
  },

  keyChange: function () {
    if (this.note.state()) {
      this.keyRelease();
    } else {
      this.keyPress();
    }
    // this.note.state() ? this.keyRelease() : this.keyPress();
  },

  render: function () {
    return (
      <div onChange={this.keyChange}></div>
    );

  }


});
